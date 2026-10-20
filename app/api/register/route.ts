import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const REGISTRATIONS_FILE = path.join(process.cwd(), "data", "registrations.json");

// Ensure data folder and file exist
function getRegistrations(): any[] {
  try {
    if (!fs.existsSync(REGISTRATIONS_FILE)) {
      fs.writeFileSync(REGISTRATIONS_FILE, JSON.stringify([], null, 2), "utf8");
      return [];
    }
    const data = fs.readFileSync(REGISTRATIONS_FILE, "utf8");
    return JSON.parse(data || "[]");
  } catch (err) {
    console.error("Error reading registrations file:", err);
    return [];
  }
}

function saveRegistration(entry: any) {
  try {
    const all = getRegistrations();
    all.push(entry);
    fs.writeFileSync(REGISTRATIONS_FILE, JSON.stringify(all, null, 2), "utf8");
  } catch (err) {
    console.error("Error saving registration:", err);
  }
}

// Background sync to https://qpsi.flemingkingstudios.com
async function syncToPortal(formData: any) {
  try {
    // 1. Fetch CSRF token and session cookies from portal
    const getRes = await fetch("https://qpsi.flemingkingstudios.com", {
      headers: {
        "User-Agent": "Mozilla/5.0 (QPSI Web Client)",
      },
      cache: "no-store",
    });

    const setCookie = getRes.headers.get("set-cookie") || "";
    const html = await getRes.text();
    const csrfMatch = html.match(/name="csrf_token"\s+value="([^"]+)"/);
    const csrfToken = csrfMatch ? csrfMatch[1] : "";

    if (!csrfToken) return;

    // 2. Prepare URL-encoded form data
    const params = new URLSearchParams();
    params.append("csrf_token", csrfToken);
    params.append("website", ""); // honeypot empty
    params.append("full_name", formData.fullName || "");
    params.append("gender", formData.gender || "");
    params.append("age_range", formData.ageRange || "");
    params.append("occupation", formData.occupation || "");
    if (formData.occupation === "Other") {
      params.append("occupation_other", formData.occupationOther || "");
    }
    params.append("location", formData.location || "");
    if (formData.location === "Other State in Nigeria") {
      params.append("location_other", formData.locationOther || "");
    }
    params.append("heard_about", formData.heardAbout || "");
    if (formData.heardAbout === "Other") {
      params.append("heard_other", formData.heardOther || "");
    }
    params.append("participated_before", formData.participatedBefore || "");
    if (formData.participatedBefore === "Yes") {
      params.append("previous_programme", formData.previousProgramme || "");
    }
    if (Array.isArray(formData.goals)) {
      formData.goals.forEach((g: string) => params.append("goals[]", g));
    }
    if (formData.goals?.includes("Other")) {
      params.append("goals_other", formData.goalsOther || "");
    }
    params.append("growth_area", formData.growthArea || "");
    params.append("stay_connected", formData.stayConnected || "");
    params.append("volunteering_interest", formData.volunteeringInterest || "");
    params.append("qpsi_meaning", formData.qpsiMeaning || "");

    // 3. Post to portal with session cookie
    await fetch("https://qpsi.flemingkingstudios.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": setCookie,
        "Referer": "https://qpsi.flemingkingstudios.com",
        "User-Agent": "Mozilla/5.0 (QPSI Web Client)",
      },
      body: params.toString(),
    });
  } catch (err) {
    // Non-blocking sync error
    console.warn("Background sync to portal had a notice:", err);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.fullName || !body.gender || !body.ageRange) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const regId = `QPSI-3ANN-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    const record = {
      id: regId,
      timestamp,
      ...body,
    };

    // Save locally on server
    saveRegistration(record);

    // Sync in background to external portal if reachable
    syncToPortal(body).catch(() => {});

    return NextResponse.json({
      success: true,
      registrationId: regId,
      message: "Registration successfully completed!",
      record,
    });
  } catch (err: any) {
    console.error("Registration error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Failed to process registration" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const registrations = getRegistrations();
  return NextResponse.json({
    total: registrations.length,
    registrations,
  });
}
