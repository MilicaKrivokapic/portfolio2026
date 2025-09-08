'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from 'app/context/language-context';

export type BlogListItem = {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    tags: string;
    image?: string;
  };
};

interface BlogGridProps {
  posts: BlogListItem[];
  initialTag?: string;
  basePath?: string; // defaults to /blog; set to /audits for audits
}

function getUniqueTags(posts: BlogListItem[], language: 'en' | 'fi'): string[] {
  const set = new Set<string>();
  posts.forEach((p) => {
    const meta: any = p.metadata as any;
    const tagString = language === 'fi' && meta.tags_fi ? meta.tags_fi : p.metadata.tags;
    if (!tagString) return;
    tagString.split(',').forEach((t: string) => {
      const trimmed = t.trim();
      if (trimmed) set.add(trimmed);
    });
  });
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export default function BlogGrid({ posts, initialTag, basePath = '/blog' }: BlogGridProps) {
  const { language, t } = useLanguage();
  const ALL = '__ALL__';
  const [activeTag, setActiveTag] = React.useState<string>(initialTag || ALL);
  const [visibleCount, setVisibleCount] = React.useState<number>(6);

  const tags = React.useMemo(() => [ALL, ...getUniqueTags(posts, language)], [posts, language]);

  const filtered = React.useMemo(() => {
    if (!posts || posts.length === 0) return [] as BlogListItem[];
    const sorted = [...posts].sort((a, b) => {
      const da = new Date(a.metadata.publishedAt).getTime();
      const db = new Date(b.metadata.publishedAt).getTime();
      return db - da;
    });
    if (activeTag === ALL) return sorted;
    return sorted.filter((p) => {
      const meta: any = p.metadata as any;
      const tagString = language === 'fi' && meta.tags_fi ? meta.tags_fi : p.metadata.tags;
      return tagString
        ?.split(',')
        .map((t: string) => t.trim())
        .includes(activeTag);
    });
  }, [posts, activeTag, language]);

  const visiblePosts = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visiblePosts.length;

  return (
    <div className="w-full">
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-10" role="tablist" aria-label="Blog categories">
        {tags.map((tag) => {
          const isActive = activeTag === tag;
          return (
            <button
              key={tag}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-pressed={isActive}
              onClick={() => {
                setActiveTag(tag);
                setVisibleCount(6);
              }}
              className={
                `px-4 py-2 rounded-full text-sm font-medium transition-colors ` +
                (isActive
                  ? 'bg-accent-light text-white dark:bg-accent-dark'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700')
              }
            >
              {tag === ALL ? t('blog.all') : tag}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {visiblePosts.map((post) => {
          const meta: any = post.metadata as any;
          const title = language === 'fi' && meta.title_fi ? meta.title_fi : post.metadata.title;
          const summary = language === 'fi' && meta.summary_fi ? meta.summary_fi : post.metadata.summary;
          const tagString = language === 'fi' && meta.tags_fi ? meta.tags_fi : post.metadata.tags;
          const firstTag = tagString?.split(',')[0]?.trim();
          const img = post.metadata.image || '/opengraph-image.png';
          return (
            <Link key={post.slug} href={`${basePath}/${post.slug}`} className="group block rounded-xl overflow-hidden bg-white dark:bg-neutral-900 shadow-md hover:shadow-lg transition-shadow">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
                {firstTag && (
                  <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                    {firstTag}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-primary-light dark:text-primary-dark mb-2 group-hover:text-accent-light dark:group-hover:text-accent-dark">
                  {title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3">
                  {summary}
                </p>
                <div className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
                  {new Date(post.metadata.publishedAt).toLocaleDateString(language === 'fi' ? 'fi-FI' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="flex justify-center mt-10">
          <button
            type="button"
            onClick={() => setVisibleCount((c) => c + 6)}
            className="px-6 py-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            {t('blog.loadMore')}
          </button>
        </div>
      )}
    </div>
  );
}


