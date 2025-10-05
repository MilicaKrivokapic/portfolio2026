'use client';
import React from 'react';
// import { socialLinks } from '../config';
import { socialData } from '../config/mockData';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TbMailFilled } from 'react-icons/tb';
import { useLanguage } from '../context/language-context';
import type { IconType } from 'react-icons';
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-primary-light dark:text-primary-dark">
          {t('contact.title')}
        </h2>
        <p className="text-lg text-muted-light dark:text-muted-dark max-w-2xl mx-auto">
          {t('contact.intro')}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Card - Contact Form */}
        <div className="bg-white/90 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-gray-200/50 dark:border-white/10 shadow-2xl form-layer">
          <form onSubmit={handleSubmit} className="space-y-6">
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
                Nimesi
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Kirjoita nimesi"
                className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-primary-light dark:text-primary-dark placeholder-gray-500 dark:placeholder-gray-400 focus:border-accent-light dark:focus:border-accent-dark focus:outline-none focus:ring-2 focus:ring-accent-light/20 dark:focus:ring-accent-dark/20 transition-all"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-primary-light dark:text-primary-dark"
              >
                Sähköpostisi
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Kirjoita sähköpostiosoitteesi"
                className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-primary-light dark:text-primary-dark placeholder-gray-500 dark:placeholder-gray-400 focus:border-accent-light dark:focus:border-accent-dark focus:outline-none focus:ring-2 focus:ring-accent-light/20 dark:focus:ring-accent-dark/20 transition-all"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-primary-light dark:text-primary-dark"
              >
                Viestisi
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Kirjoita viestisi tähän..."
                className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-primary-light dark:text-primary-dark placeholder-gray-500 dark:placeholder-gray-400 focus:border-accent-light dark:focus:border-accent-dark focus:outline-none focus:ring-2 focus:ring-accent-light/20 dark:focus:ring-accent-dark/20 resize-none transition-all"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-accent-light to-purple-600 dark:from-accent-dark dark:to-purple-500 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-accent-light/25 dark:hover:shadow-accent-dark/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Lähetetään...' : 'Lähetä viesti'}
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
        </div>

        {/* Right Card - Contact Info */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 text-white rounded-3xl p-8 lg:p-10 relative overflow-hidden shadow-2xl">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-light/20 to-purple-500/20 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/20 to-accent-light/20 rounded-full blur-2xl" aria-hidden="true" />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-8">Contact Info</h3>
            
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.61a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.61.59A2 2 0 0 1 22 16.92z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white/90 font-medium">+358 (0) 000 0000</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white/90 font-medium break-all">milica.portfolio@proton.me</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white/90 font-medium">Helsinki, Finland</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {socialData.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={`Connect on ${link.name}`}
                  >
                    {getIcon(link.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
