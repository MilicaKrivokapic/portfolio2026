'use client';

import { useEffect, useState, useCallback } from 'react';
import { useLanguage } from '../context/language-context';

export default function BackToTop() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = useCallback(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
  }, []);

  return (
    <div
      aria-hidden={!isVisible}
      className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <button
        type="button"
        onClick={handleClick}
        className="flex items-center gap-2 rounded-full bg-primary-light/90 dark:bg-primary-dark/90 text-background-light dark:text-background-dark shadow-lg hover:bg-primary-light dark:hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-light/70 dark:focus-visible:ring-primary-dark/70 px-4 py-2"
        aria-label={t('common.backToTop')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M12 4c.414 0 .75.336.75.75V18a.75.75 0 0 1-1.5 0V4.75c0-.414.336-.75.75-.75z" />
          <path d="M7.22 8.28a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06L12 4.06 8.28 8.28a.75.75 0 0 1-1.06 0z" />
        </svg>
        <span className="text-sm font-medium">{t('common.backToTop')}</span>
      </button>
    </div>
  );
}


