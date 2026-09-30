"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "General Information",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the mailto link
    const subject = encodeURIComponent(`QPSI Contact Form: ${formData.inquiry}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "N/A"}\nInquiry Type: ${formData.inquiry}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:contact@queenspalmsi.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const inputClass = "w-full h-[56px] px-6 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl font-ibm-mono text-[13px] text-[#F5F5F0] placeholder:text-[#666] outline-none focus:border-[#A855F7]/80 focus:bg-white/[0.06] transition-all duration-300";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        <input
          type="text"
          name="name"
          placeholder="YOUR NAME *"
          required
          value={formData.name}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          type="email"
          name="email"
          placeholder="EMAIL ADDRESS *"
          required
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        <input
          type="tel"
          name="phone"
          placeholder="PHONE NUMBER"
          value={formData.phone}
          onChange={handleChange}
          className={inputClass}
        />
        <div className="relative w-full">
          <select
            name="inquiry"
            value={formData.inquiry}
            onChange={handleChange}
            className={`${inputClass} appearance-none cursor-pointer pr-12`}
          >
            <option value="General Information" className="bg-[#111] text-white">GENERAL INFORMATION</option>
            <option value="Partnerships & Collaboration" className="bg-[#111] text-white">PARTNERSHIPS & COLLABORATION</option>
            <option value="Volunteer / Careers" className="bg-[#111] text-white">VOLUNTEER / CAREERS</option>
            <option value="Speaking & Workshop Requests" className="bg-[#111] text-white">SPEAKING & WORKSHOP REQUESTS</option>
          </select>
          <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#A855F7]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
        </div>
      </div>

      <textarea
        name="message"
        placeholder="YOUR MESSAGE *"
        required
        value={formData.message}
        onChange={handleChange}
        className={`${inputClass} min-h-[180px] py-6 resize-none`}
      />

      <button
        type="submit"
        className="w-full h-[64px] bg-[#F5F5F0] hover:bg-[#A855F7] hover:text-white rounded-2xl transition-all duration-300 mt-2 shadow-[0_0_30px_rgba(245,245,240,0.1)] hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:-translate-y-1"
      >
        <span className="font-grotesk text-[14px] font-bold text-[#0A0A0A] group-hover:text-white tracking-[2px] transition-colors">
          SEND MESSAGE
        </span>
      </button>
    </form>
  );
}
