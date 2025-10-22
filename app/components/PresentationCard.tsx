import React from 'react';
import Image from 'next/image';

type Props = {
  image: string;
  alt: string;
  heading: string;
  caption?: React.ReactNode;
  children: React.ReactNode;
};

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

export default function PresentationCard({ image, alt, heading, children, caption }: Props) {
  const id = slugify(heading || 'presentation');

  return (
    <aside
      role="region"
      aria-labelledby={id}
      className="rounded-lg border-2 md:p-4 transition-colors mb-8 bg-surface-light dark:bg-surface-dark border-gray-100 dark:border-zinc-800"
    >
      <figure className='p-4 md:0'>
        <Image src={image} alt={alt} width={640} height={500} className="rounded-lg" />
        {/** Visible caption when provided, otherwise keep alt as sr-only caption for screen readers */}
        {caption ? (
          <figcaption className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{caption}</figcaption>
        ) : (
          <figcaption className="sr-only">{alt}</figcaption>
        )}
      </figure>

      <div className="rounded-md bg-surface-light dark:bg-surface-dark p-2 mt-4">
        <h4 id={id} className="m-0">
          <a href={`#${id}`} className="anchor mr-2">#</a>
          {heading}
        </h4>

        <div className="mt-2 text-sm leading-relaxed text-neutral-900 dark:text-neutral-100">
          {children}
        </div>
      </div>
    </aside>
  );
}
