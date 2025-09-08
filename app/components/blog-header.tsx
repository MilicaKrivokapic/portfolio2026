'use client';

import { useLanguage } from "app/context/language-context";

export default function BlogHeader() {
  const { t } = useLanguage();
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark bg-clip-text text-transparent animate-gradient bg-300% mb-6" style={{ lineHeight: 'unset' }}>
        {t('blog.heading')}
      </h1>
      <p className="text-neutral-600 dark:text-neutral-400 mb-10">{t('blog.intro')}</p>
    </div>
  );
}


