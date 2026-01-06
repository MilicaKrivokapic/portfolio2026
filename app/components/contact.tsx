"use client";
import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../context/language-context";
import EnvelopeSolid from "./icons/EnvelopeSolid";
import CalendarDaysSolidFull from "./icons/CalendarDaysSolidFull";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      setSubmitStatus("success");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "a64a1d36-6e40-46a1-8c2d-258ac14ebb1b",
          from_name: formData.name,
          replyTo: formData.email,
          subject: `New contact from ${formData.name}`,
          message: formData.message,
          email_to: "Milica.portfolio@proton.me",
        }),
      });

      const data = await response.json();
      if (data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "", honeypot: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-12 md:space-y-16">
      <section className="space-y-6">
        <div className="text-start space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-light dark:text-primary-dark">
            {t("contact.title")}
          </h1>
          <p className="text-base md:text-lg text-muted-light dark:text-muted-dark">
            {t("contact.intro")}
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-3 gap-3 pt-4 sm:gap-4 max-w-3xl">
          {/* Email Card */}
          <a
            href="mailto:milica.portfolio@proton.me"
            className="group flex flex-col items-center text-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl hover:bg-accent-light/5 dark:hover:bg-accent-dark/5 transition-all"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent-light/10 dark:bg-accent-dark/10 rounded-xl flex items-center justify-center group-hover:bg-accent-light/20 dark:group-hover:bg-accent-dark/20 transition-colors">
              <EnvelopeSolid className="w-7 h-7 sm:w-8 sm:h-8 text-accent-light dark:text-accent-dark" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-semibold text-primary-light dark:text-primary-dark">
                {t("contact.emailLabel")}
              </p>
              <p className="hidden sm:block text-xs text-muted-light dark:text-muted-dark mt-0.5">
                milica.portfolio@proton.me
              </p>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/milica-krivokapic/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl hover:bg-accent-light/5 dark:hover:bg-accent-dark/5 transition-all"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent-light/10 dark:bg-accent-dark/10 rounded-xl flex items-center justify-center group-hover:bg-accent-light/20 dark:group-hover:bg-accent-dark/20 transition-colors">
              <FaLinkedin className="w-7 h-7 sm:w-8 sm:h-8 text-accent-light dark:text-accent-dark" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-semibold text-primary-light dark:text-primary-dark">
                LinkedIn
              </p>
              <p className="hidden sm:block text-xs text-muted-light dark:text-muted-dark mt-0.5">
                Connect with me
              </p>
            </div>
          </a>

          {/* Book Meeting Card */}
          <a
            href="https://cal.com/milica-krivokapic"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl hover:bg-accent-light/5 dark:hover:bg-accent-dark/5 transition-all"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent-light/10 dark:bg-accent-dark/10 rounded-xl flex items-center justify-center group-hover:bg-accent-light/20 dark:group-hover:bg-accent-dark/20 transition-colors">
              <CalendarDaysSolidFull className="w-7 h-7 sm:w-8 sm:h-8 text-accent-light dark:text-accent-dark" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-semibold text-primary-light dark:text-primary-dark">
                {t("contact.bookLabel")}
              </p>
              <p className="hidden sm:block text-xs text-muted-light dark:text-muted-dark mt-0.5">
                {t("contact.bookMeeting")}
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* Form and Image Section - Two Columns */}
      <section className="w-full grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:grid-cols-[minmax(520px,1.4fr)_minmax(0,1fr)]">
        {/* Left Column - Form */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-primary-light dark:text-primary-dark">
            {t("contact.formHeading")}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Honeypot */}
            <div className="opacity-0 absolute -z-10 select-none pointer-events-none">
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Name Field */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-primary-light dark:text-primary-dark"
              >
                {t("contact.nameLabel")}
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t("contact.namePlaceholder")}
                className="w-full bg-stone-50 dark:bg-zinc-900 border border-stone-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-primary-light dark:text-primary-dark placeholder-stone-500 dark:placeholder-zinc-500 focus:border-accent-light dark:focus:border-accent-dark focus:outline-none focus:ring-2 focus:ring-accent-light/20 dark:focus:ring-accent-dark/20 transition-all"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-primary-light dark:text-primary-dark"
              >
                {t("contact.emailFieldLabel")}
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t("contact.emailPlaceholder")}
                className="w-full bg-stone-50 dark:bg-zinc-900 border border-stone-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-primary-light dark:text-primary-dark placeholder-stone-500 dark:placeholder-zinc-500 focus:border-accent-light dark:focus:border-accent-dark focus:outline-none focus:ring-2 focus:ring-accent-light/20 dark:focus:ring-accent-dark/20 transition-all"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-primary-light dark:text-primary-dark"
              >
                {t("contact.messageLabel")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder={t("contact.messagePlaceholder")}
                className="w-full bg-stone-50 dark:bg-zinc-900 border border-stone-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-primary-light dark:text-primary-dark placeholder-stone-500 dark:placeholder-zinc-500 focus:border-accent-light dark:focus:border-accent-dark focus:outline-none focus:ring-2 focus:ring-accent-light/20 dark:focus:ring-accent-dark/20 resize-none transition-all"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-accent-light to-purple-600 dark:from-accent-dark dark:to-purple-500 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-accent-light/25 dark:hover:shadow-accent-dark/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t("contact.sending") : t("contact.sendButton")}
            </button>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div
                className="p-4 bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/20 rounded-xl"
                aria-live="polite"
              >
                <p className="text-green-600 dark:text-green-400 text-sm">
                  {t("contact.successMessage")}
                </p>
              </div>
            )}
            {submitStatus === "error" && (
              <div
                className="p-4 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-xl"
                aria-live="polite"
              >
                <p className="text-red-600 dark:text-red-400 text-sm">
                  {t("contact.errorMessage")}
                </p>
              </div>
            )}
          </form>
        </div>

        {/* Right Column - Image */}
        <div className="hidden md:block w-full relative h-full min-h-[18rem] md:min-h-[28rem] lg:min-h-[32rem]">
          <Image
            src="/contact.png"
            alt="Contact illustration"
            fill
            className="object-contain p-4 md:p-4 lg:p-6"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 65vw, 45vw"
          />
        </div>
      </section>
    </div>
  );
}
