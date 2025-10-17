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
    title_fi?: string;
    summary_fi?: string;
    tags_fi?: string;
  };
};

interface BlogGridProps {
  posts: BlogListItem[];
  initialTag?: string;
  basePath?: string; // defaults to /blog; set to /audits for audits
  showDate?: boolean;
  showFilters?: boolean; // defaults to true
}

function normalizeAndSplitTags(tagString?: string): string[] {
  if (!tagString) return [];
  return tagString
    .split(',')
    .map((t) => t.trim())
    .map((t) => t.replace(/^#/, ''))
    .filter(Boolean);
}

function getUniqueTags(posts: BlogListItem[], language: 'en' | 'fi'): string[] {
  const set = new Set<string>();
  posts.forEach((p) => {
    const meta: any = p.metadata as any;
    const tagString = language === 'fi' && meta.tags_fi ? meta.tags_fi : p.metadata.tags;
    normalizeAndSplitTags(tagString).forEach((t) => set.add(t));
  });
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export default function BlogGrid({ posts, initialTag, basePath = '/blog', showDate = true, showFilters = true }: BlogGridProps) {
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
      return normalizeAndSplitTags(tagString).includes(activeTag);
    });
  }, [posts, activeTag, language]);

  const visiblePosts = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visiblePosts.length;

  return (
    <div className="w-full">
      {/* Filters */}
      {showFilters && (
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
                  `px-4 py-2 rounded-full text-sm md:text-base font-semibold transition-colors ring-1 focus-visible:outline-none ` +
                  (isActive
                    ? 'bg-black text-white ring-black/30 focus-visible:ring-2 focus-visible:ring-black dark:bg-white dark:text-black dark:ring-white/40 dark:focus-visible:ring-white'
                    : 'bg-white text-black ring-black/20 hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-black dark:bg-black dark:text-white dark:ring-white/30 dark:hover:bg-white/10 dark:focus-visible:ring-white')
                }
              >
                {tag === ALL ? t('blog.all') : tag}
              </button>
            );
          })}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {visiblePosts.map((post) => {
          const meta: any = post.metadata as any;
          const title = language === 'fi' && meta.title_fi ? meta.title_fi : post.metadata.title;
          const summary = language === 'fi' && meta.summary_fi ? meta.summary_fi : post.metadata.summary;
          const tagString = language === 'fi' && meta.tags_fi ? meta.tags_fi : post.metadata.tags;
          const allTags = normalizeAndSplitTags(tagString);
          const img = post.metadata.image || '/opengraph-image.png';
          return (
            <Link
              key={post.slug}
              href={`${basePath}/${post.slug}`}
              className="group block bg-stone-100 dark:bg-zinc-800/90 rounded-2xl shadow-2xs dark:shadow-sm border-2 border-stone-200/60 dark:border-zinc-700/50 p-6 md:p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white transition-transform hover:scale-[1.02]"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
                {allTags.length > 0 && (
                  <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-2">
                    {allTags.map((tag) => (
                      <span
                        key={`${post.slug}-badge-${tag}`}
                        className="text-xs md:text-sm px-2.5 py-1.5 rounded-full bg-black/80 text-white backdrop-blur-sm dark:bg-white/90 dark:text-black shadow-sm ring-1 ring-black/20 dark:ring-white/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="pt-5">
                <h3 className="text-xl md:text-2xl font-medium leading-snug text-primary-light dark:text-primary-dark group-hover:text-accent-light dark:group-hover:text-accent-dark">
                  {title}
                </h3>
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3">
                  {summary}
                </p>
                {showDate && (
                  <div className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
                    {new Date(post.metadata.publishedAt).toLocaleDateString(
                      language === 'fi' ? 'fi-FI' : 'en-US',
                      { month: 'short', day: 'numeric', year: 'numeric' }
                    )}
                  </div>
                )}
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


