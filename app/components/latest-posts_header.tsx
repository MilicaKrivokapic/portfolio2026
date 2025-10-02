'use client';

import Button from 'app/components/ui/Button';
import { useLanguage } from 'app/context/language-context';

export default function LatestPostsHeader() {
  const { t } = useLanguage();
  return (
    <div className="flex items-center justify-between gap-4">
      <h2 id="latest-posts-heading" className="text-3xl md:text-4xl font-bold font-heading">
        {t('blog.latestHeading')}
      </h2>
      <Button as="a" href="/blog" aria-label={t('blog.seeAll')}>
        {t('blog.seeAll')}
      </Button>
    </div>
  );
}




