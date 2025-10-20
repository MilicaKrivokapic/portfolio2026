'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export type ProjectGridItem = {
  title: string;
  summary?: string;
  href: string;
  image?: string;
  tags?: string[];
};

export default function ProjectGrid({ items }: { items: ProjectGridItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {items.map((item, idx) => {
        const img = item.image || '/opengraph-image.png';
        return (
          <Link
            key={`${item.href}-${idx}`}
            href={item.href}
            className="group block bg-stone-100 dark:bg-zinc-800/90 rounded-2xl shadow-2xs dark:shadow-sm border-2 border-stone-200/60 dark:border-zinc-700/50 p-6 md:p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white transition-transform hover:scale-[1.02]"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
              <Image
                src={img}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
              {item.tags && item.tags.length > 0 && (
                <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={`${item.href}-badge-${tag}`}
                      className="text-xs md:text-sm px-2.5 py-1.5 rounded-full bg-black/80 text-white backdrop-blur-sm dark:bg-white/90 dark:text-black shadow-sm ring-1 ring-black/20 dark:ring-white/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="pt-5">
              <h3 className="text-xl md:text-2xl font-medium leading-snug">
                {item.title}
              </h3>
              {item.summary && (
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3">
                  {item.summary}
                </p>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}


