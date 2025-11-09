'use client';

import { useLanguage } from 'app/context/language-context';

export default function LatestPostsHeader() {
  const { t } = useLanguage();
  return (
    <div>
      <h2 id="latest-posts-heading" className="text-2xl md:text-3xl font-bold relative inline-block">
        {t('blog.latestHeading')}
        <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent-light dark:bg-accent-dark rounded-full" />
      </h2>
    </div>
  );
}




