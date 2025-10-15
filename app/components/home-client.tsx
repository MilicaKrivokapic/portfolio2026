'use client';
import Projects from './projects';
import Recommendations from './recommendations';
import LatestPostsClient from './latest-posts-client';
import Link from 'next/link';
import Button from './ui/Button';
import Image from 'next/image';
import { useLanguage } from '../context/language-context';
import type { BlogListItem } from './blog-grid';

interface HomeClientProps {
  posts: BlogListItem[];
}

export default function HomeClient({ posts }: HomeClientProps) {
  const { t } = useLanguage();
  
  return (
    <div className="px-4 md:px-6 py-6 md:py-6">
      <div className="max-w-5xl ml-auto rounded-3xl bg-gradient-to-b from-white to-neutral-100 dark:from-[#161617] dark:to-[#0F0F10] shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-black/5 dark:ring-white/5 p-10 md:p-20 overflow-hidden">
        <div className="md:space-y-32">
          {/* Hero Section with CSS Grid Overlap */}
          <section className="grid grid-cols-12 md:gap-2 items-center overflow-hidden">
            {/* Image - appears first on mobile, overlaps on desktop */}
            <div className="col-span-12 md:col-span-7 md:col-start-7 md:row-start-1 md:row-span-7 z-0 order-1 md:order-2">
              <div className="relative aspect-[4/5] w-48 mx-auto md:w-full">
                <Image
                  src="/wawe_portfolio.png"
                  alt="Milica"
                  fill
                  priority
                  className="object-contain"
                  sizes="(min-width: 768px) 50vw, 12rem"
                />
              </div>
            </div>

            {/* Text Content - spans columns 1-9, rows 1-6 */}
            <div className="col-span-12 md:col-span-8 md:col-start-1 md:row-start-1 md:row-span-6 z-10 space-y-2 grid order-2 md:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl md:col-start-1 md:col-end-7 lg:text-6xl xl:text-7xl font-bold font-heading leading-tight break-words">
                {t('about.heroGreeting')}
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl md:col-start-1 md:col-end-7 lg:text-4xl font-semibold text-accent-light dark:text-accent-dark leading-tight">
                {t('about.heroTagline')}
              </p>
              <p className="text-xl md:col-start-1 md:col-end-3 leading-relaxed">
                {t('about.summary')}
              </p>
              <div className="flex flex-col sm:flex-row md:col-start-1 gap-4 pt-4">
                <Link href="/about">
                  <Button variant="secondary" shadow="strong" className="w-full sm:w-auto group md:text-lg text-lg md:px-8 px-6 md:py-3 py-3 font-semibold md:w-auto text-center">
                    {t('about.aboutMeButton')}
                  </Button>
                </Link>
              </div>
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
