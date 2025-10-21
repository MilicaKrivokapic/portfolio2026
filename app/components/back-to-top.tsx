'use client';

import { useEffect, useState, useCallback } from 'react';
import { useLanguage } from '../context/language-context';
import SquareCaretDown from './icons/SquareCaretDown';

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
        className="flex items-center gap-2 rounded-2xl bg-primary-light/90 dark:bg-primary-dark/90 text-background-light dark:text-background-dark shadow-lg hover:bg-primary-light dark:hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-light/70 dark:focus-visible:ring-primary-dark/70 px-6 py-3"
        aria-label={t('common.backToTop')}
      >
        <SquareCaretDown className="w-5 h-5 rotate-180" />
        <span className="text-sm font-medium">{t('common.backToTop')}</span>
      </button>
    </div>
  );
}


