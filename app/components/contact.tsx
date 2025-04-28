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
      <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark bg-clip-text text-transparent mb-8">
        {t('contact.title')}
      </h2>
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-8 form-layer">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4 text-primary-light dark:text-primary-dark">
              {t('contact.connect')}
            </h3>
            <div className="flex gap-4">
              {socialData.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background-light dark:bg-background-dark rounded-full hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                >
                  {getIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex-1 space-y-4">
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
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t('contact.name')}
              required
              className="w-full p-3 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark outline-none transition-all"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('contact.email')}
              required
              className="w-full p-3 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark outline-none transition-all"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t('contact.message')}
              required
              rows={4}
              className="w-full p-3 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark outline-none transition-all"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-light dark:bg-primary-dark text-white py-3 px-6 rounded-lg hover:bg-accent-light dark:hover:bg-accent-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t('contact.sending') : t('contact.send')}
            </button>
            {submitStatus === 'success' && (
              <p className="text-green-600 dark:text-green-400 text-sm mt-2">
                {t('contact.successMessage')}
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 dark:text-red-400 text-sm mt-2">
                {t('contact.errorMessage')}
              </p>
            )}
          </form>
        </div>
        <div className="space-y-8 mt-8">
          <p className="text-lg text-muted-light dark:text-muted-dark">
            {t('contact.reachOut')}
          </p>
          <a 
            href={socialLinks.email}
            className="inline-block px-6 py-3 bg-accent-light dark:bg-accent-dark text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            {t('contact.sendEmail')}
          </a>
        </div>
      </div>
    </section>
  );
}
