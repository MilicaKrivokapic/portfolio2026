'use client';
import { useState } from 'react';
import { useLanguage } from '../context/language-context';
import Button from './ui/Button';

export default function AboutMe() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p className="text-xl leading-relaxed mb-6">
        {t('about.summary')}
      </p>
      
      <div className={`transition-all duration-500 space-y-6 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
        <p className="leading-relaxed">{t('about.career')}</p>
        <p className="leading-relaxed">{t('about.education')}</p>
        <p className="leading-relaxed">{t('about.transition')}</p>
        <p className="leading-relaxed">{t('about.current')}</p>
        <p className="leading-relaxed">{t('about.conclusion')}</p>
      </div>

      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4"
         shadow="strong"
      >
        {isExpanded ? t('about.readLess') : t('about.readMore')}
      </Button>
    </div>
  );
}
