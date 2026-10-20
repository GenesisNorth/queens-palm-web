"use client";

import { useState } from "react";

const GOAL_OPTIONS = [
  "Personal development",
  "Emotional intelligence",
  "Communication Skill",
  "Networking",
  "Inspiration/Motivation",
  "Financial Literacy",
  "Other",
];

const HEARD_OPTIONS = [
  "Instagram",
  "Facebook",
  "WhatsApp",
  "LinkedIn",
  "Friend/Family",
  "Church",
  "QPSI Ambassador",
  "Other",
];

export default function EventRegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    ageRange: "",
    occupation: "",
    occupationOther: "",
    location: "Lagos",
    locationOther: "",
    heardAbout: "",
    heardOther: "",
    participatedBefore: "",
    previousProgramme: "",
    goals: [] as string[],
    goalsOther: "",
    growthArea: "",
    stayConnected: "Yes",
    volunteeringInterest: "Maybe",
    qpsiMeaning: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [registrationId, setRegistrationId] = useState("");
  const [error, setError] = useState("");

  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGoalToggle = (goal: string) => {
    setFormData((prev) => {
      const exists = prev.goals.includes(goal);
      return {
        ...prev,
        goals: exists
          ? prev.goals.filter((g) => g !== goal)
          : [...prev.goals, goal],
      };
    });
  };

  const generateEmailBody = (regId: string) => {
    return encodeURIComponent(
      `QPSI 3RD ANNIVERSARY REGISTRATION\n` +
      `Registration ID: ${regId}\n\n` +
      `Full Name: ${formData.fullName}\n` +
      `Email: ${formData.email || "N/A"}\n` +
      `Phone: ${formData.phone || "N/A"}\n` +
      `Gender: ${formData.gender}\n` +
      `Age Range: ${formData.ageRange}\n` +
      `Occupation: ${formData.occupation === "Other" ? formData.occupationOther : formData.occupation}\n` +
      `Location: ${formData.location === "Other State in Nigeria" ? formData.locationOther : formData.location}\n` +
      `Heard About: ${formData.heardAbout === "Other" ? formData.heardOther : formData.heardAbout}\n` +
      `Participated Before: ${formData.participatedBefore} ${formData.previousProgramme ? `(${formData.previousProgramme})` : ""}\n` +
      `Goals: ${formData.goals.join(", ")} ${formData.goalsOther ? `(${formData.goalsOther})` : ""}\n` +
      `Growth Area:\n${formData.growthArea}\n\n` +
      `Stay Connected: ${formData.stayConnected}\n` +
      `Volunteering: ${formData.volunteeringInterest}\n` +
      `QPSI Meaning:\n${formData.qpsiMeaning || "N/A"}\n`
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setRegistrationId(data.registrationId);
        setSuccess(true);
      } else {
        throw new Error(data.error || "Submission failed");
      }
    } catch (err: any) {
      // Fallback: If network issue, generate ID and trigger mailto backup
      console.warn("API route error, activating email backup:", err);
      const fallbackId = `QPSI-3ANN-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
      setRegistrationId(fallbackId);
      setSuccess(true);
      
      const subject = encodeURIComponent(`QPSI 3rd Anniversary Registration: ${formData.fullName}`);
      const body = generateEmailBody(fallbackId);
      window.location.href = `mailto:queenspalmsi@gmail.com?subject=${subject}&body=${body}`;
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full h-[52px] px-5 bg-white/[0.03] backdrop-blur-sm border border-white/[0.1] rounded-xl font-ibm-mono text-[13px] text-[#F5F5F0] placeholder:text-[#666] outline-none focus:border-[#A855F7] focus:bg-white/[0.06] transition-all duration-300";

  const labelClass = "font-ibm-mono text-[11px] font-bold text-[#A855F7] tracking-[1.5px] uppercase mb-2 block";

  if (success) {
    return (
      <div className="w-full p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-md border border-[#A855F7]/40 shadow-[0_24px_80px_rgba(168,85,247,0.2)] flex flex-col items-center text-center animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-[#A855F7]/20 border border-[#A855F7] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(168,85,247,0.5)]">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5F5F0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <span className="font-ibm-mono text-[11px] font-bold text-[#A855F7] tracking-[2.5px] uppercase mb-2">
          Registration Confirmed
        </span>

        <h3 className="font-grotesk text-[28px] md:text-[38px] font-bold text-white tracking-[-1px] leading-tight mb-4">
          You’re In! We Can’t Wait To Welcome You.
        </h3>

        <div className="px-5 py-3 rounded-2xl bg-white/[0.04] border border-white/10 mb-6 flex items-center gap-3">
          <span className="font-ibm-mono text-[11px] text-[#888888] tracking-[1px]">PASS ID:</span>
          <span className="font-grotesk text-[16px] font-bold text-[#A855F7] tracking-[2px]">{registrationId}</span>
        </div>

        <p className="font-ibm-mono text-[13px] md:text-[14px] text-[#A0A0A0] max-w-[620px] leading-[1.8] mb-8">
          Thank you, <strong className="text-white">{formData.fullName}</strong>. Your seat has been reserved for the <strong>QPSI 3rd Anniversary</strong>. Your submission is recorded directly in our system.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[500px]">
          <a
            href={`mailto:queenspalmsi@gmail.com?subject=${encodeURIComponent(`QPSI 3rd Anniversary Registration: ${formData.fullName} (${registrationId})`)}&body=${generateEmailBody(registrationId)}`}
            className="flex-1 h-[54px] rounded-full bg-[#A855F7] hover:bg-[#9333EA] text-white flex items-center justify-center font-grotesk text-[12px] font-bold tracking-[1.5px] shadow-[0_0_24px_rgba(168,85,247,0.4)] transition-all"
          >
            EMAIL COPY TO QPSI TEAM
          </a>

          <button
            onClick={() => {
              setSuccess(false);
              setFormData({
                fullName: "",
                gender: "",
                ageRange: "",
                occupation: "",
                occupationOther: "",
                location: "Lagos",
                locationOther: "",
                heardAbout: "",
                heardOther: "",
                participatedBefore: "",
                previousProgramme: "",
                goals: [],
                goalsOther: "",
                growthArea: "",
                stayConnected: "Yes",
                volunteeringInterest: "Maybe",
                qpsiMeaning: "",
              });
            }}
            className="flex-1 h-[54px] rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[#CCCCCC] hover:text-white flex items-center justify-center font-ibm-mono text-[11px] tracking-[1.5px] transition-colors"
          >
            REGISTER ANOTHER PERSON
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      id="register-form"
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-8 p-6 sm:p-10 md:p-12 rounded-[2.5rem] bg-white/[0.02] backdrop-blur-md border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden scroll-mt-28"
    >
      <div className="flex flex-col gap-2 border-b border-white/[0.08] pb-6">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#A855F7] animate-pulse" />
          <span className="font-ibm-mono text-[10px] font-bold text-[#A855F7] tracking-[2px] uppercase">
            Official Event Registration
          </span>
        </div>
        <h3 className="font-grotesk text-[26px] md:text-[34px] font-bold text-white tracking-[-1px]">
          QPSI 3rd Anniversary Form
        </h3>
        <p className="font-ibm-mono text-[12px] text-[#888888] leading-[1.6]">
          Complete this form directly on our site to confirm your attendance. All responses are saved directly to QPSI.
        </p>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 font-ibm-mono text-[12px]">
          {error}
        </div>
      )}

      {/* 1. Full Name */}
      <div className="flex flex-col">
        <label htmlFor="fullName" className={labelClass}>
          Full Name <span className="text-white">*</span>
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          placeholder="Enter your first and last name"
          value={formData.fullName}
          onChange={handleTextChange}
          className={inputClass}
        />
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="email" className={labelClass}>
            Email Address <span className="text-white">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="e.g. name@example.com"
            value={formData.email}
            onChange={handleTextChange}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className={labelClass}>
            Phone / WhatsApp Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="e.g. +234 816 910 5349"
            value={formData.phone}
            onChange={handleTextChange}
            className={inputClass}
          />
        </div>
      </div>

      {/* 2. Gender & Age Range */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <span className={labelClass}>
            Gender <span className="text-white">*</span>
          </span>
          <div className="grid grid-cols-2 gap-3">
            {["Female", "Male"].map((g) => {
              const selected = formData.gender === g;
              return (
                <button
                  type="button"
                  key={g}
                  onClick={() => handleRadioChange("gender", g)}
                  className={`h-[50px] rounded-xl font-ibm-mono text-[12px] font-semibold tracking-[1px] transition-all border ${
                    selected
                      ? "bg-[#A855F7] text-white border-[#A855F7] shadow-[0_0_16px_rgba(168,85,247,0.4)]"
                      : "bg-white/[0.02] text-[#888] border-white/[0.08] hover:border-white/20"
                  }`}
                >
                  {g}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="ageRange" className={labelClass}>
            Age Range <span className="text-white">*</span>
          </label>
          <div className="relative">
            <select
              id="ageRange"
              name="ageRange"
              required
              value={formData.ageRange}
              onChange={handleTextChange}
              className={`${inputClass} appearance-none cursor-pointer pr-10`}
            >
              <option value="" className="bg-[#111] text-gray-400">Select your age range</option>
              <option value="Under 18" className="bg-[#111] text-white">Under 18</option>
              <option value="18–24" className="bg-[#111] text-white">18–24</option>
              <option value="25–34" className="bg-[#111] text-white">25–34</option>
              <option value="35–44" className="bg-[#111] text-white">35–44</option>
              <option value="45+" className="bg-[#111] text-white">45+</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#A855F7]">
              ▼
            </div>
          </div>
        </div>
      </div>

      {/* 3. Occupation */}
      <div className="flex flex-col">
        <span className={labelClass}>
          Occupation / Profession <span className="text-white">*</span>
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {["Student", "Entrepreneur", "Employed", "Unemployed", "Other"].map((occ) => {
            const selected = formData.occupation === occ;
            return (
              <button
                type="button"
                key={occ}
                onClick={() => handleRadioChange("occupation", occ)}
                className={`h-[48px] px-3 rounded-xl font-ibm-mono text-[11px] font-semibold tracking-[0.5px] transition-all border ${
                  selected
                    ? "bg-[#A855F7] text-white border-[#A855F7] shadow-[0_0_16px_rgba(168,85,247,0.4)]"
                    : "bg-white/[0.02] text-[#888] border-white/[0.08] hover:border-white/20"
                }`}
              >
                {occ}
              </button>
            );
          })}
        </div>
        {formData.occupation === "Other" && (
          <input
            name="occupationOther"
            type="text"
            placeholder="Please specify your occupation..."
            value={formData.occupationOther}
            onChange={handleTextChange}
            className={`${inputClass} mt-3 animate-fadeIn`}
          />
        )}
      </div>

      {/* 4. Location */}
      <div className="flex flex-col">
        <span className={labelClass}>
          Location <span className="text-white">*</span>
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {["Lagos", "Other State in Nigeria"].map((loc) => {
            const selected = formData.location === loc;
            return (
              <button
                type="button"
                key={loc}
                onClick={() => handleRadioChange("location", loc)}
                className={`h-[48px] px-4 rounded-xl font-ibm-mono text-[12px] font-semibold tracking-[1px] transition-all border ${
                  selected
                    ? "bg-[#A855F7] text-white border-[#A855F7] shadow-[0_0_16px_rgba(168,85,247,0.4)]"
                    : "bg-white/[0.02] text-[#888] border-white/[0.08] hover:border-white/20"
                }`}
              >
                {loc}
              </button>
            );
          })}
        </div>
        {formData.location === "Other State in Nigeria" && (
          <input
            name="locationOther"
            type="text"
            placeholder="Which state in Nigeria?"
            value={formData.locationOther}
            onChange={handleTextChange}
            className={`${inputClass} mt-3 animate-fadeIn`}
          />
        )}
      </div>

      {/* 5. How did you hear about QPSI 3rd Anniversary? */}
      <div className="flex flex-col">
        <span className={labelClass}>
          How did you hear about the QPSI 3rd Anniversary? <span className="text-white">*</span>
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {HEARD_OPTIONS.map((opt) => {
            const selected = formData.heardAbout === opt;
            return (
              <button
                type="button"
                key={opt}
                onClick={() => handleRadioChange("heardAbout", opt)}
                className={`h-[46px] px-3 rounded-xl font-ibm-mono text-[11px] font-medium tracking-[0.5px] transition-all border ${
                  selected
                    ? "bg-[#A855F7] text-white border-[#A855F7] shadow-[0_0_16px_rgba(168,85,247,0.4)]"
                    : "bg-white/[0.02] text-[#888] border-white/[0.08] hover:border-white/20"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>
        {formData.heardAbout === "Other" && (
          <input
            name="heardOther"
            type="text"
            placeholder="Please tell us how you heard about it..."
            value={formData.heardOther}
            onChange={handleTextChange}
            className={`${inputClass} mt-3 animate-fadeIn`}
          />
        )}
      </div>

      {/* 6. Participated before? */}
      <div className="flex flex-col">
        <span className={labelClass}>
          Have you participated in any QPSI programme before? <span className="text-white">*</span>
        </span>
        <div className="grid grid-cols-2 gap-3 max-w-[360px]">
          {["Yes", "No"].map((ans) => {
            const selected = formData.participatedBefore === ans;
            return (
              <button
                type="button"
                key={ans}
                onClick={() => handleRadioChange("participatedBefore", ans)}
                className={`h-[48px] rounded-xl font-ibm-mono text-[12px] font-semibold tracking-[1px] transition-all border ${
                  selected
                    ? "bg-[#A855F7] text-white border-[#A855F7] shadow-[0_0_16px_rgba(168,85,247,0.4)]"
                    : "bg-white/[0.02] text-[#888] border-white/[0.08] hover:border-white/20"
                }`}
              >
                {ans}
              </button>
            );
          })}
        </div>
        {formData.participatedBefore === "Yes" && (
          <input
            name="previousProgramme"
            type="text"
            placeholder="Which QPSI programme or event?"
            value={formData.previousProgramme}
            onChange={handleTextChange}
            className={`${inputClass} mt-3 animate-fadeIn`}
          />
        )}
      </div>

      {/* 7. Goals */}
      <div className="flex flex-col">
        <span className={labelClass}>
          What are you hoping to gain from this anniversary event? <span className="text-white">*</span>
        </span>
        <span className="font-ibm-mono text-[11px] text-[#666] mb-3">Select all that apply:</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {GOAL_OPTIONS.map((goal) => {
            const active = formData.goals.includes(goal);
            return (
              <button
                type="button"
                key={goal}
                onClick={() => handleGoalToggle(goal)}
                className={`h-[48px] px-4 rounded-xl font-ibm-mono text-[11px] font-medium tracking-[0.5px] transition-all border text-left flex items-center justify-between ${
                  active
                    ? "bg-[#A855F7]/20 text-white border-[#A855F7] shadow-[0_0_16px_rgba(168,85,247,0.25)]"
                    : "bg-white/[0.02] text-[#888] border-white/[0.08] hover:border-white/20"
                }`}
              >
                <span>{goal}</span>
                <span className={`w-4 h-4 rounded-md border flex items-center justify-center text-[10px] ${
                  active ? "bg-[#A855F7] border-[#A855F7] text-white" : "border-white/20"
                }`}>
                  {active ? "✓" : ""}
                </span>
              </button>
            );
          })}
        </div>
        {formData.goals.includes("Other") && (
          <input
            name="goalsOther"
            type="text"
            placeholder="What else are you hoping to gain?"
            value={formData.goalsOther}
            onChange={handleTextChange}
            className={`${inputClass} mt-3 animate-fadeIn`}
          />
        )}
      </div>

      {/* 8. Growth Area */}
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <label htmlFor="growthArea" className={labelClass.replace("mb-2", "")}>
            What is one area of your life you would like to grow in? <span className="text-white">*</span>
          </label>
          <span className="font-ibm-mono text-[10px] text-[#666]">
            {formData.growthArea.length}/500
          </span>
        </div>
        <textarea
          id="growthArea"
          name="growthArea"
          required
          rows={3}
          maxLength={500}
          placeholder="Share what growth would look like for you..."
          value={formData.growthArea}
          onChange={handleTextChange}
          className={`${inputClass} h-auto py-3 resize-none`}
        />
      </div>

      {/* 9. Stay Connected & Volunteering */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <span className={labelClass}>
            Stay connected for future updates? <span className="text-white">*</span>
          </span>
          <div className="grid grid-cols-2 gap-3">
            {["Yes", "No"].map((opt) => (
              <button
                type="button"
                key={opt}
                onClick={() => handleRadioChange("stayConnected", opt)}
                className={`h-[48px] rounded-xl font-ibm-mono text-[12px] font-semibold tracking-[1px] transition-all border ${
                  formData.stayConnected === opt
                    ? "bg-[#A855F7] text-white border-[#A855F7] shadow-[0_0_16px_rgba(168,85,247,0.4)]"
                    : "bg-white/[0.02] text-[#888] border-white/[0.08] hover:border-white/20"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <span className={labelClass}>
            Interested in volunteering? <span className="text-white">*</span>
          </span>
          <div className="grid grid-cols-3 gap-2">
            {["Yes", "No", "Maybe"].map((opt) => (
              <button
                type="button"
                key={opt}
                onClick={() => handleRadioChange("volunteeringInterest", opt)}
                className={`h-[48px] rounded-xl font-ibm-mono text-[12px] font-semibold tracking-[0.5px] transition-all border ${
                  formData.volunteeringInterest === opt
                    ? "bg-[#A855F7] text-white border-[#A855F7] shadow-[0_0_16px_rgba(168,85,247,0.4)]"
                    : "bg-white/[0.02] text-[#888] border-white/[0.08] hover:border-white/20"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 10. Meaning of QPSI (Optional) */}
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <label htmlFor="qpsiMeaning" className={labelClass.replace("mb-2", "")}>
            What does QPSI mean to you? <span className="text-gray-500 font-normal normal-case">(Optional)</span>
          </label>
          <span className="font-ibm-mono text-[10px] text-[#666]">
            {formData.qpsiMeaning.length}/700
          </span>
        </div>
        <textarea
          id="qpsiMeaning"
          name="qpsiMeaning"
          rows={3}
          maxLength={700}
          placeholder="Share your QPSI story or what you love most about our mission..."
          value={formData.qpsiMeaning}
          onChange={handleTextChange}
          className={`${inputClass} h-auto py-3 resize-none`}
        />
      </div>

      {/* Submit Button */}
      <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-ibm-mono text-[11px] text-[#777]">
          <span className="text-[#A855F7]">✓</span>
          <span>Your information is safely handled by Queens Palm Support Initiative.</span>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto px-10 h-[60px] rounded-full bg-[#A855F7] hover:bg-[#9333EA] text-white font-grotesk text-[13px] font-bold tracking-[2px] shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.7)] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>CONFIRMING...</span>
            </>
          ) : (
            <>
              <span>COMPLETE REGISTRATION</span>
              <span>→</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
