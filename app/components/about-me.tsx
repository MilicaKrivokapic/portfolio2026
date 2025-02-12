'use client';
import { useState } from 'react';
import { useLanguage } from '../context/language-context';

export default function AboutMe() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p className="text-xl leading-relaxed mb-6">
        {t('about.intro')}
      </p>
      
      <div className={`transition-all duration-500 space-y-6 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
        <p className="leading-relaxed">{t('about.career')}</p>
        <p className="leading-relaxed">{t('about.education')}</p>
        <p className="leading-relaxed">{t('about.transition')}</p>
        <p className="leading-relaxed">{t('about.current')}</p>
        <p className="leading-relaxed">{t('about.conclusion')}</p>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 text-primary-light dark:text-primary-dark border border-accent-light dark:border-accent-dark hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-all focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark rounded-md px-3 py-1.5"
      >
        {isExpanded ? t('about.readLess') : t('about.readMore')}
      </button>
    </div>
  );
}
