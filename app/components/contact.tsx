'use client';
import React from 'react';
import { socialLinks } from '../config';
import { socialData } from '../config/mockData';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TbMailFilled } from 'react-icons/tb';
import { useLanguage } from '../context/language-context';
import type { IconType } from 'react-icons';

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
    <section className="py-12">
      <h2 className="text-4xl font-bold font-heading bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark bg-clip-text text-transparent mb-8">
        {t('contact.title')}
      </h2>
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-8 form-layer transition-all duration-300 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-accent-dark/5">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-6 text-primary-light dark:text-primary-dark">
              {t('contact.connect')}
            </h3>
            <div className="flex gap-4 p-4 bg-gradient-to-r from-background-light to-surface-light dark:from-background-dark dark:to-surface-dark rounded-lg border border-gray-100 dark:border-gray-800">
              {socialData.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-background-light dark:bg-background-dark rounded-xl hover:text-accent-light dark:hover:text-accent-dark transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark focus:ring-offset-2 focus:ring-offset-surface-light dark:focus:ring-offset-surface-dark"
                  aria-label={`Connect on ${link.name}`}
                >
                  {getIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex-1 space-y-6">
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
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-primary-light dark:text-primary-dark">
                {t('contact.name')}
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark focus:border-transparent outline-none transition-all duration-300 placeholder:text-muted-light dark:placeholder:text-muted-dark"
                placeholder={t('contact.namePlaceholder')}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-primary-light dark:text-primary-dark">
                {t('contact.email')}
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark focus:border-transparent outline-none transition-all duration-300 placeholder:text-muted-light dark:placeholder:text-muted-dark"
                placeholder={t('contact.emailPlaceholder')}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-primary-light dark:text-primary-dark">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-3 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark focus:border-transparent outline-none transition-all duration-300 placeholder:text-muted-light dark:placeholder:text-muted-dark resize-none"
                placeholder={t('contact.messagePlaceholder')}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-accent-light to-primary-light dark:from-accent-dark dark:to-primary-dark text-white py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark focus:ring-offset-2 focus:ring-offset-surface-light dark:focus:ring-offset-surface-dark"
            >
              {isSubmitting ? t('contact.sending') : t('contact.send')}
            </button>
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/20 rounded-lg">
                <p className="text-green-600 dark:text-green-400 text-sm">
                  {t('contact.successMessage')}
                </p>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-lg">
                <p className="text-red-600 dark:text-red-400 text-sm">
                  {t('contact.errorMessage')}
                </p>
              </div>
            )}
          </form>
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-light dark:text-muted-dark max-w-2xl mx-auto mb-6">
            {t('contact.reachOut')}
          </p>
          <a 
            href={socialLinks.email}
            className="inline-block px-8 py-3 bg-background-light dark:bg-background-dark text-accent-light dark:text-accent-dark border-2 border-accent-light dark:border-accent-dark rounded-lg hover:bg-accent-light dark:hover:bg-accent-dark hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark focus:ring-offset-2 focus:ring-offset-surface-light dark:focus:ring-offset-surface-dark"
          >
            {t('contact.sendEmail')}
          </a>
        </div>
      </div>
    </section>
  );
}
