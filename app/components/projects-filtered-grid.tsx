'use client';

import React from 'react';
import ProjectGrid, { ProjectGridItem } from 'app/components/project-grid';

export default function ProjectsFilteredGrid({
  items,
  initialTag,
}: {
  items: (ProjectGridItem & { allTags?: string[] })[];
  initialTag?: string;
}) {
  const ALL = '__ALL__';
  const [activeTag, setActiveTag] = React.useState<string>(initialTag || ALL);

  const uniqueTags = React.useMemo(() => {
    const set = new Set<string>();
    items.forEach((item) => (item.allTags || []).forEach((t) => set.add(t)));
    return [ALL, ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, [items]);

  const filteredItems = React.useMemo(() => {
    if (activeTag === ALL) return items;
    return items.filter((item) => (item.allTags || []).includes(activeTag));
  }, [items, activeTag]);

  return (
    <>
      <div className="flex flex-wrap gap-3 mb-10" role="tablist" aria-label="Project categories">
        {uniqueTags.map((tag) => {
          const isActive = activeTag === tag;
          return (
            <button
              key={tag}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-pressed={isActive}
              onClick={() => setActiveTag(tag)}
              className={
                `px-4 py-2 rounded-full text-sm md:text-base font-semibold transition-colors ring-1 focus-visible:outline-none ` +
                (isActive
                  ? 'bg-black text-white ring-black/30 focus-visible:ring-2 focus-visible:ring-black dark:bg-white dark:text-black dark:ring-white/40 dark:focus-visible:ring-white'
                  : 'bg-white text-black ring-black/20 hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-black dark:bg-black dark:text-white dark:ring-white/30 dark:hover:bg-white/10 dark:focus-visible:ring-white')
              }
            >
              {tag === ALL ? 'All' : tag}
            </button>
          );
        })}
      </div>
      <ProjectGrid items={filteredItems} />
    </>
  );
}


