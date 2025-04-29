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
        className="mt-4 px-6 py-2 rounded-lg bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-100 dark:hover:bg-neutral-900 active:bg-gray-200 dark:active:bg-neutral-900 transition-all duration-200 ease-in-out hover:bg-stone-50 hover:scale-[0.97] shadow-accent-light/40 dark:shadow-accent-dark shadow-[0_0_12px_rgba(255,51,102,0.4)] hover:shadow-[0_0_8px_rgba(255,51,102,0.4)] dark:hover:shadow-[0_0_8px_rgba(249,58,106,0.6)]"
      >
        {isExpanded ? t('about.readLess') : t('about.readMore')}
      </button>
    </div>
  );
}
