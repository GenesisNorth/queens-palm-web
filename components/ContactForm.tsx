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

  const inputClass = "w-full h-[56px] px-4 bg-white/[0.02] backdrop-blur-md border border-white/[0.08] font-ibm-mono text-[13px] text-[#F5F5F0] placeholder:text-[#888] outline-none focus:border-[#A855F7] transition-colors";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <input
          type="tel"
          name="phone"
          placeholder="PHONE NUMBER"
          value={formData.phone}
          onChange={handleChange}
          className={inputClass}
        />
        <select
          name="inquiry"
          value={formData.inquiry}
          onChange={handleChange}
          className={`${inputClass} appearance-none cursor-pointer bg-transparent`}
          style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23A855F7%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', backgroundSize: '10px' }}
        >
          <option value="General Information">GENERAL INFORMATION</option>
          <option value="Partnerships & Collaboration">PARTNERSHIPS & COLLABORATION</option>
          <option value="Volunteer / Careers">VOLUNTEER / CAREERS</option>
          <option value="Speaking & Workshop Requests">SPEAKING & WORKSHOP REQUESTS</option>
        </select>
      </div>

      <textarea
        name="message"
        placeholder="YOUR MESSAGE *"
        required
        value={formData.message}
        onChange={handleChange}
        className={`${inputClass} min-h-[160px] py-4 resize-y`}
      />

      <button
        type="submit"
        className="w-full h-[64px] bg-[#A855F7] hover:bg-[#9333EA] transition-colors mt-2"
      >
        <span className="font-grotesk text-[14px] font-bold text-white tracking-[2px]">
          SEND MESSAGE
        </span>
      </button>
    </form>
  );
}
