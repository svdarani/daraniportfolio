"use client";

import React, { useState } from "react";
import { NovaNavbar } from "@/components/layout/NovaNavbar";
import { NovaFooter } from "@/components/layout/NovaFooter";
import { NovaButton } from "@/components/ui/NovaButton";
import { socialsData } from "@/data/socials";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

const projectTypes = [
  "UI/UX Design",
  "Graphic Design",
  "Branding",
  "Website Design",
  "Frontend Development",
  "Startup or Event Creatives",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    projectType: "UI/UX Design",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      errs.message = "Please describe what you are looking to build.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Please provide a message with at least 10 characters.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        organization: "",
        projectType: "UI/UX Design",
        message: "",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-[#090A0F] dark:text-[#F7F8FC] font-modernist selection:bg-[#326BFF] selection:text-white dark:selection:bg-[#326BFF] dark:selection:text-white transition-colors">
      <NovaNavbar />

      <main className="pt-32 pb-24 max-w-[1320px] mx-auto px-5 sm:px-8">
        {/* Page Hero: Debata Display Headline */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] text-[11px] uppercase tracking-[0.14em] font-modernist font-semibold text-[#326BFF] dark:text-[#24D9FF] mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#24D9FF] shadow-[0_0_8px_#24D9FF] animate-pulse" />
            <span>CONNECT WITH DARANI</span>
          </div>

          <h1 className="font-debata text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.035em] text-neutral-950 dark:text-[#F7F8FC] leading-[1.08] mb-6 max-w-4xl">
            Reach me anytime,{" "}
            <span className="nova-gradient-text">anywhere.</span>
          </h1>

          <p className="font-modernist text-lg sm:text-xl text-neutral-600 dark:text-[#A5ADBD] leading-relaxed max-w-3xl font-normal">
            Whether you&apos;re building a startup brand, seeking UI/UX design, or exploring creative web development, I&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-24">
          {/* Left Column: Direct Inquiries */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] shadow-sm">
              <h2 className="font-debata text-xl sm:text-2xl font-bold text-neutral-950 dark:text-[#F7F8FC] mb-2 tracking-tight">
                I&apos;d love to hear from you
              </h2>
              <p className="font-modernist text-sm text-neutral-600 dark:text-[#A5ADBD] leading-relaxed mb-8">
                Send a message through the form or reach out directly via email, phone, or LinkedIn.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#11131A] border border-neutral-200 dark:border-white/10 flex items-center justify-center text-[#326BFF] dark:text-[#24D9FF] flex-shrink-0">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-modernist uppercase tracking-wider text-neutral-500 dark:text-[#A5ADBD] font-medium">Email</div>
                    <a
                      href={`mailto:${socialsData.email}`}
                      className="text-base font-modernist font-semibold text-neutral-950 dark:text-white hover:text-[#326BFF] dark:hover:text-[#24D9FF] transition-colors"
                    >
                      {socialsData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#11131A] border border-neutral-200 dark:border-white/10 flex items-center justify-center text-[#326BFF] dark:text-[#24D9FF] flex-shrink-0">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-modernist uppercase tracking-wider text-neutral-500 dark:text-[#A5ADBD] font-medium">Phone</div>
                    <a
                      href={`tel:${socialsData.phone}`}
                      className="text-base font-modernist font-semibold text-neutral-950 dark:text-white hover:text-[#326BFF] dark:hover:text-[#24D9FF] transition-colors"
                    >
                      {socialsData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#11131A] border border-neutral-200 dark:border-white/10 flex items-center justify-center text-[#326BFF] dark:text-[#24D9FF] flex-shrink-0">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-modernist uppercase tracking-wider text-neutral-500 dark:text-[#A5ADBD] font-medium">Location</div>
                    <div className="text-base font-modernist font-semibold text-neutral-950 dark:text-white">
                      {socialsData.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-white/[0.08]">
                <div className="text-[11px] font-modernist uppercase tracking-[0.12em] text-neutral-500 dark:text-[#A5ADBD] mb-4">
                  Social Channels:
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={socialsData.links.find((l) => l.platform === "GitHub")?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white dark:bg-[#11131A] border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-600 hover:text-[#326BFF] hover:border-[#326BFF]/40 dark:text-[#A5ADBD] dark:hover:text-white dark:hover:border-white/40 transition-all hover:scale-105"
                    aria-label="GitHub profile"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                  <a
                    href={socialsData.links.find((l) => l.platform === "LinkedIn")?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white dark:bg-[#11131A] border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-600 hover:text-[#326BFF] hover:border-[#326BFF]/40 dark:text-[#A5ADBD] dark:hover:text-white dark:hover:border-white/40 transition-all hover:scale-105"
                    aria-label="LinkedIn profile"
                  >
                    <FiLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={socialsData.links.find((l) => l.platform === "Instagram")?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white dark:bg-[#11131A] border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-600 hover:text-[#326BFF] hover:border-[#326BFF]/40 dark:text-[#A5ADBD] dark:hover:text-white dark:hover:border-white/40 transition-all hover:scale-105"
                    aria-label="Instagram profile"
                  >
                    <FiInstagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] shadow-sm">
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-neutral-100 dark:bg-[#11131A] border border-neutral-300 dark:border-white/10 flex items-center justify-center text-[#326BFF] dark:text-[#24D9FF] mb-6 shadow-sm">
                    <FiCheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-debata text-2xl font-bold text-neutral-950 dark:text-white mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="font-modernist text-base text-neutral-600 dark:text-[#A5ADBD] max-w-md mb-8">
                    Thank you for reaching out. I will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-neutral-100 dark:bg-[#11131A] border border-neutral-200 dark:border-white/10 text-xs font-modernist text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-modernist text-neutral-600 dark:text-[#A5ADBD] uppercase tracking-wider mb-2 font-medium"
                      >
                        Your Name <span className="text-[#326BFF] dark:text-[#24D9FF]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: "" });
                        }}
                        placeholder="Darani Viswanathan"
                        className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-[#11131A] border text-sm font-modernist text-neutral-900 dark:text-[#F7F8FC] placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-1 transition-colors ${
                          errors.name
                            ? "border-red-500/50 focus:ring-red-500/50"
                            : "border-neutral-200 dark:border-white/[0.08] focus:border-[#326BFF] dark:focus:border-[#326BFF] focus:ring-[#326BFF]/20"
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-modernist">
                          <FiAlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-modernist text-neutral-600 dark:text-[#A5ADBD] uppercase tracking-wider mb-2 font-medium"
                      >
                        Email Address <span className="text-[#326BFF] dark:text-[#24D9FF]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        placeholder="yourname@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-[#11131A] border text-sm font-modernist text-neutral-900 dark:text-[#F7F8FC] placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-1 transition-colors ${
                          errors.email
                            ? "border-red-500/50 focus:ring-red-500/50"
                            : "border-neutral-200 dark:border-white/[0.08] focus:border-[#326BFF] dark:focus:border-[#326BFF] focus:ring-[#326BFF]/20"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-modernist">
                          <FiAlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-xs font-modernist text-neutral-600 dark:text-[#A5ADBD] uppercase tracking-wider mb-2 font-medium"
                      >
                        Organization (Optional)
                      </label>
                      <input
                        type="text"
                        id="organization"
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({ ...formData, organization: e.target.value })
                        }
                        placeholder="Startup / Venture"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#11131A] border border-neutral-200 dark:border-white/[0.08] text-sm font-modernist text-neutral-900 dark:text-[#F7F8FC] placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-[#326BFF] dark:focus:border-[#326BFF] focus:ring-1 focus:ring-[#326BFF]/20 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-xs font-modernist text-neutral-600 dark:text-[#A5ADBD] uppercase tracking-wider mb-2 font-medium"
                      >
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) =>
                          setFormData({ ...formData, projectType: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#11131A] border border-neutral-200 dark:border-white/[0.08] text-sm font-modernist text-neutral-900 dark:text-[#F7F8FC] focus:outline-none focus:border-[#326BFF] dark:focus:border-[#326BFF] focus:ring-1 focus:ring-[#326BFF]/20 transition-colors"
                      >
                        {projectTypes.map((type) => (
                          <option key={type} value={type} className="bg-white dark:bg-[#11131A] text-neutral-900 dark:text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-modernist text-neutral-600 dark:text-[#A5ADBD] uppercase tracking-wider mb-2 font-medium"
                    >
                      Project Details &amp; Message <span className="text-[#326BFF] dark:text-[#24D9FF]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: "" });
                      }}
                      placeholder="Tell me about what you are planning, timelines, or requirements..."
                      className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-[#11131A] border text-sm font-modernist text-neutral-900 dark:text-[#F7F8FC] placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-1 transition-colors resize-none ${
                        errors.message
                          ? "border-red-500/50 focus:ring-red-500/50"
                          : "border-neutral-200 dark:border-white/[0.08] focus:border-[#326BFF] dark:focus:border-[#326BFF] focus:ring-[#326BFF]/20"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-modernist">
                        <FiAlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <NovaButton
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto"
                    >
                      {isSubmitting ? "Sending..." : "Submit Message"}
                    </NovaButton>

                    <span className="text-[11px] font-modernist text-neutral-500 dark:text-[#A5ADBD]">
                      Responses typically within 24 hours.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <NovaFooter />
    </div>
  );
}
