'use client';
import React from 'react';
import Image from 'next/image';
// import { socialLinks } from '../config';
import { socialData } from '../config/mockData';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TbMailFilled } from 'react-icons/tb';
import { useLanguage } from '../context/language-context';
import type { IconType } from 'react-icons';
import EnvelopeSolid from './icons/EnvelopeSolid';
import CalendarDaysSolidFull from './icons/CalendarDaysSolidFull';
import MobileScreen from './icons/MobileScreen';
// import Button from './ui/Button';

const iconMap: Record<string, IconType> = {
  FaGithub,
  FaLinkedin,
  TbMailFilled
};

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
    honeypot: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const getIcon = (iconName: string) => {
    const Icon = iconMap[iconName];
    return Icon ? <Icon className="w-6 h-6" /> : null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.honeypot) {
      setSubmitStatus('success');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'a64a1d36-6e40-46a1-8c2d-258ac14ebb1b',
          from_name: formData.name,
          replyTo: formData.email,
          subject: `New contact from ${formData.name}`,
          message: formData.message,
          email_to: 'Milica.portfolio@proton.me'
        })
      });

      const data = await response.json();
      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '', honeypot: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-16 md:space-y-24">
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-light dark:text-primary-dark">
            {t('contact.title')}
          </h1>
          <p className="text-lg text-muted-light dark:text-muted-dark">
            {t('contact.intro')}
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-6">
          {/* Email Card */}
          <a
            href="mailto:milica.portfolio@proton.me"
            className="group sm:bg-stone-100 sm:dark:bg-zinc-800/90 rounded-2xl sm:p-6 sm:border-2 sm:border-stone-200/60 sm:dark:border-zinc-700/50 sm:hover:border-accent-light sm:dark:hover:border-accent-dark transition-all sm:hover:scale-[1.02] sm:shadow-2xs sm:dark:shadow-sm"
          >
            <div className="flex flex-col items-center text-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-16 sm:h-16 sm:bg-accent-light/10 sm:dark:bg-accent-dark/10 rounded-xl flex items-center justify-center">
                <EnvelopeSolid className="w-5 h-5 sm:w-7 sm:h-7 text-accent-light dark:text-accent-dark" />
              </div>
              <div className="hidden sm:block">
                <p className="text-xs font-semibold text-muted-light dark:text-muted-dark mb-1">{t('contact.emailLabel')}</p>
                <p className="text-sm font-medium text-primary-light dark:text-primary-dark break-all">milica.portfolio@proton.me</p>
              </div>
              <p className="sm:hidden text-xs font-semibold text-primary-light dark:text-primary-dark">{t('contact.emailLabel')}</p>
            </div>
          </a>

          {/* Phone Card */}
          <a
            href="tel:+3580000000"
            className="group sm:bg-stone-100 sm:dark:bg-zinc-800/90 rounded-2xl sm:p-6 sm:border-2 sm:border-stone-200/60 sm:dark:border-zinc-700/50 sm:hover:border-accent-light sm:dark:hover:border-accent-dark transition-all sm:hover:scale-[1.02] sm:shadow-2xs sm:dark:shadow-sm"
          >
            <div className="flex flex-col items-center text-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-16 sm:h-16 sm:bg-accent-light/10 sm:dark:bg-accent-dark/10 rounded-xl flex items-center justify-center">
                <MobileScreen className="w-5 h-5 sm:w-7 sm:h-7 text-accent-light dark:text-accent-dark" />
              </div>
              <div className="hidden sm:block">
                <p className="text-xs font-semibold text-muted-light dark:text-muted-dark mb-1">{t('contact.callLabel')}</p>
                <p className="text-sm font-medium text-primary-light dark:text-primary-dark">+358 (0) 000 0000</p>
              </div>
              <p className="sm:hidden text-xs font-semibold text-primary-light dark:text-primary-dark">{t('contact.callLabel')}</p>
            </div>
          </a>

          {/* Book Meeting Card */}
          <a
            href="https://cal.com/milica-krivokapic"
            target="_blank"
            rel="noopener noreferrer"
            className="group sm:bg-stone-100 sm:dark:bg-zinc-800/90 rounded-2xl sm:p-6 sm:border-2 sm:border-stone-200/60 sm:dark:border-zinc-700/50 sm:hover:border-accent-light sm:dark:hover:border-accent-dark transition-all sm:hover:scale-[1.02] sm:shadow-2xs sm:dark:shadow-sm"
          >
            <div className="flex flex-col items-center text-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-16 sm:h-16 sm:bg-accent-light/10 sm:dark:bg-accent-dark/10 rounded-xl flex items-center justify-center">
                <CalendarDaysSolidFull className="w-5 h-5 sm:w-7 sm:h-7 text-accent-light dark:text-accent-dark" />
              </div>
              <div className="hidden sm:block">
                <p className="text-xs font-semibold text-muted-light dark:text-muted-dark mb-1">{t('contact.bookLabel')}</p>
                <p className="text-sm font-medium text-primary-light dark:text-primary-dark">{t('contact.bookMeeting')}</p>
              </div>
              <p className="sm:hidden text-xs font-semibold text-primary-light dark:text-primary-dark">{t('contact.bookLabel')}</p>
            </div>
          </a>
        </div>
      </section>

  {/* Form and Image Section - Two Columns */}
  <section className="w-full grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:grid-cols-[minmax(520px,1.4fr)_minmax(0,1fr)]">
        {/* Left Column - Form */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-primary-light dark:text-primary-dark">{t('contact.formHeading')}</h3>
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
                {t('contact.nameLabel')}
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t('contact.namePlaceholder')}
                className="w-full bg-stone-50 dark:bg-zinc-900 border border-stone-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-primary-light dark:text-primary-dark placeholder-stone-500 dark:placeholder-zinc-500 focus:border-accent-light dark:focus:border-accent-dark focus:outline-none focus:ring-2 focus:ring-accent-light/20 dark:focus:ring-accent-dark/20 transition-all"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-primary-light dark:text-primary-dark"
              >
                {t('contact.emailFieldLabel')}
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t('contact.emailPlaceholder')}
                className="w-full bg-stone-50 dark:bg-zinc-900 border border-stone-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-primary-light dark:text-primary-dark placeholder-stone-500 dark:placeholder-zinc-500 focus:border-accent-light dark:focus:border-accent-dark focus:outline-none focus:ring-2 focus:ring-accent-light/20 dark:focus:ring-accent-dark/20 transition-all"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-primary-light dark:text-primary-dark"
              >
                {t('contact.messageLabel')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder={t('contact.messagePlaceholder')}
                className="w-full bg-stone-50 dark:bg-zinc-900 border border-stone-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-primary-light dark:text-primary-dark placeholder-stone-500 dark:placeholder-zinc-500 focus:border-accent-light dark:focus:border-accent-dark focus:outline-none focus:ring-2 focus:ring-accent-light/20 dark:focus:ring-accent-dark/20 resize-none transition-all"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-accent-light to-purple-600 dark:from-accent-dark dark:to-purple-500 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-accent-light/25 dark:hover:shadow-accent-dark/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t('contact.sending') : t('contact.sendButton')}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/20 rounded-xl" aria-live="polite">
                <p className="text-green-600 dark:text-green-400 text-sm">
                  {t('contact.successMessage')}
                </p>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-xl" aria-live="polite">
                <p className="text-red-600 dark:text-red-400 text-sm">
                  {t('contact.errorMessage')}
                </p>
              </div>
            )}
          </form>

          {/* Social Links */}
          <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10">
            <h4 className="text-lg font-semibold mb-4 text-center text-primary-light dark:text-primary-dark">{t('contact.connectHeading')}</h4>
            <div className="flex justify-center gap-3 sm:gap-4">
              {socialData.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-primary-light dark:text-primary-dark"
                  aria-label={`Connect on ${link.name}`}
                >
                  {getIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
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
