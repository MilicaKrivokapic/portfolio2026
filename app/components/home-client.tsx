'use client';
import Projects from './projects';
import Recommendations from './recommendations';
import LatestPostsClient from './latest-posts-client';
import Link from 'next/link';
import Button from './ui/Button';
import { useLanguage } from '../context/language-context';
import type { BlogListItem } from './blog-grid';

interface HomeClientProps {
  posts: BlogListItem[];
}

export default function HomeClient({ posts }: HomeClientProps) {
  const { t } = useLanguage();
  
  return (
    <div className="px-4 md:px-6 py-6 md:py-10">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-white to-neutral-100 dark:from-[#161617] dark:to-[#0F0F10] shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-black/5 dark:ring-white/5 p-10 md:p-20">
        <div className="space-y-16 md:space-y-32">
      <section className="space-y-8">
        <h1 className="text-4xl md:text-7xl font-bold font-heading">
          Building accessible
          <span className="text-accent-light dark:text-accent-dark"> digital experiences</span>
        </h1>
        <p className="text-xl leading-relaxed max-w-3xl">
          {t('about.summary')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link href="/about">
            <Button variant="secondary" shadow="strong" className="w-full sm:w-auto">
              {t('about.aboutMeButton')}
            </Button>
          </Link>
        </div>
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="recommendations">
        <Recommendations />
      </section>


      <section id="latest-posts">
        <LatestPostsClient posts={posts} />
      </section>
        </div>
      </div>
    </div>
  );
}
