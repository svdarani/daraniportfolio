"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { NovaSectionHeader } from "../ui/NovaSectionHeader";
import { NovaButton } from "../ui/NovaButton";
import { socialsData } from "@/data/socials";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiInstagram, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const projectTypes = [
  "UI/UX Design",
  "Graphic Design",
  "Branding",
  "Website Design",
  "Frontend Development",
  "Startup or Event Creatives",
  "Other",
];

export const NovaContact: React.FC = () => {
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
    // Simulate real submission
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
    <section id="contact" className="section-contain py-24 sm:py-32 bg-neutral-50 dark:bg-black relative transition-colors">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <NovaSectionHeader
          eyebrow="05 / CONTACT"
          titleStart="Let's Create"
          titleHighlight="Something Meaningful."
          description="Whether you're working on a brand, exploring a digital product, or looking for creative support, I'd love to hear what you're building."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Contact Info & Socials (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#121212] border border-neutral-200 dark:border-white/10 shadow-sm">
              <h3 className="font-debata text-xl sm:text-2xl font-semibold text-neutral-950 dark:text-white mb-2">
                Let&apos;s Work Together
              </h3>
              <p className="font-modernist text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 font-normal">
                Open to design inquiries, creative consultations, frontend collaborations, and internship opportunities.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center text-black dark:text-white flex-shrink-0">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-modernist uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Email Address</div>
                    <a
                      href={`mailto:${socialsData.email}`}
                      className="text-sm sm:text-base font-modernist font-semibold text-neutral-950 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                    >
                      {socialsData.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center text-black dark:text-white flex-shrink-0">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-modernist uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Phone / WhatsApp</div>
                    <a
                      href={`tel:${socialsData.phone}`}
                      className="text-sm sm:text-base font-modernist font-semibold text-neutral-950 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                    >
                      {socialsData.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center text-black dark:text-white flex-shrink-0">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-modernist uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Location</div>
                    <div className="text-sm sm:text-base font-modernist font-semibold text-neutral-950 dark:text-white">
                      {socialsData.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-white/10">
                <div className="text-[11px] font-modernist uppercase tracking-[0.12em] text-neutral-500 dark:text-neutral-400 mb-4">
                  Connect on Socials:
                </div>
                <div className="flex items-center gap-3">
                  <motion.a
                    href={socialsData.links.find((l) => l.platform === "GitHub")?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    data-cursor="LINK"
                    className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-[#0a0a0a] border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-600 hover:text-black hover:border-black/40 dark:text-neutral-400 dark:hover:text-white dark:hover:border-white/40 transition-colors shadow-xs"
                    aria-label="GitHub profile"
                  >
                    <FiGithub className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={socialsData.links.find((l) => l.platform === "LinkedIn")?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    data-cursor="LINK"
                    className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-[#0a0a0a] border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-600 hover:text-black hover:border-black/40 dark:text-neutral-400 dark:hover:text-white dark:hover:border-white/40 transition-colors shadow-xs"
                    aria-label="LinkedIn profile"
                  >
                    <FiLinkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={socialsData.links.find((l) => l.platform === "Instagram")?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    data-cursor="LINK"
                    className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-[#0a0a0a] border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-600 hover:text-black hover:border-black/40 dark:text-neutral-400 dark:hover:text-white dark:hover:border-white/40 transition-colors shadow-xs"
                    aria-label="Instagram profile"
                  >
                    <FiInstagram className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#121212] border border-neutral-200 dark:border-white/10 shadow-sm relative">
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-neutral-100 dark:bg-[#0a0a0a] border border-neutral-300 dark:border-white/10 flex items-center justify-center text-black dark:text-white mb-6 shadow-sm">
                    <FiCheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-debata text-2xl font-semibold text-neutral-950 dark:text-white mb-2">
                    Message Received!
                  </h4>
                  <p className="font-modernist text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-md mb-8">
                    Thank you for reaching out! I will review your note and get back to you promptly at your email address.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-neutral-100 dark:bg-[#0a0a0a] border border-neutral-200 dark:border-white/10 text-xs font-modernist text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-modernist text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-2 font-medium"
                      >
                        Your Name <span className="text-black dark:text-white">*</span>
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
                        className={`w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#0a0a0a] border text-sm font-modernist text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-1 transition-colors ${
                          errors.name
                            ? "border-red-500/50 focus:ring-red-500/50"
                            : "border-neutral-200 dark:border-white/10 focus:border-black dark:focus:border-white focus:ring-black/20 dark:focus:ring-white/20"
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
                        className="block text-xs font-modernist text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-2 font-medium"
                      >
                        Email Address <span className="text-black dark:text-white">*</span>
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
                        className={`w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#0a0a0a] border text-sm font-modernist text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-1 transition-colors ${
                          errors.email
                            ? "border-red-500/50 focus:ring-red-500/50"
                            : "border-neutral-200 dark:border-white/10 focus:border-black dark:focus:border-white focus:ring-black/20 dark:focus:ring-white/20"
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

                  {/* Row 2: Organization & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-xs font-modernist text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-2 font-medium"
                      >
                        Organization / Venture (Optional)
                      </label>
                      <input
                        type="text"
                        id="organization"
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({ ...formData, organization: e.target.value })
                        }
                        placeholder="Startup / Company / Event"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#0a0a0a] border border-neutral-200 dark:border-white/10 text-sm font-modernist text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black/20 dark:focus:ring-white/20 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-xs font-modernist text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-2 font-medium"
                      >
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) =>
                          setFormData({ ...formData, projectType: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#0a0a0a] border border-neutral-200 dark:border-white/10 text-sm font-modernist text-neutral-900 dark:text-white focus:outline-none focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black/20 dark:focus:ring-white/20 transition-colors"
                      >
                        {projectTypes.map((type) => (
                          <option key={type} value={type} className="bg-white dark:bg-[#121212] text-neutral-900 dark:text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-modernist text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-2 font-medium"
                    >
                      Project Details &amp; Message <span className="text-black dark:text-white">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: "" });
                      }}
                      placeholder="Tell me about what you are planning, timelines, or requirements..."
                      className={`w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#0a0a0a] border text-sm font-modernist text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-1 transition-colors resize-none ${
                        errors.message
                          ? "border-red-500/50 focus:ring-red-500/50"
                          : "border-neutral-200 dark:border-white/10 focus:border-black dark:focus:border-white focus:ring-black/20 dark:focus:ring-white/20"
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

                    <span className="text-[11px] font-modernist text-neutral-500 dark:text-neutral-400">
                      Responses typically within 24 hours.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
