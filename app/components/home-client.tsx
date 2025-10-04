'use client';
import Projects from './projects';
import Skills from './skills';
import Contact from './contact';
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
    <div className="px-6 py-12 md:py-24 space-y-16 md:space-y-32 max-w-4xl mx-auto">
      <section id="about" className="space-y-8">
        <h1 className="text-4xl md:text-7xl font-bold font-heading">
          Building accessible
          <span className="text-accent-light dark:text-accent-dark"> digital experiences</span>
        </h1>
        <p className="text-xl leading-relaxed max-w-3xl">
          {t('about.summary')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link href="/about">
            <Button shadow="strong" className="w-full sm:w-auto">
              {t('about.aboutMeButton')}
            </Button>
          </Link>
          <Link href="/projects">
            <Button variant="secondary" shadow="strong" className="w-full sm:w-auto">
              {t('about.seeWorksButton')}
            </Button>
          </Link>
        </div>
      </section>

      <section id="experience" className="space-y-12">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="recommendations">
        <Recommendations />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="latest-posts">
        <LatestPostsClient posts={posts} />
      </section>
    </div>
  );
}
