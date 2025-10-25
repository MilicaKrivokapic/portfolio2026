'use client';
import Projects from './projects';
import Recommendations from './recommendations';
import LatestPostsClient from './latest-posts-client';
import HeroSection from './hero-section';
import type { BlogListItem } from './blog-grid';

interface HomeClientProps {
  posts: BlogListItem[];
}

export default function HomeClient({ posts }: HomeClientProps) {
  return (
    <div className="px-4 md:px-6 py-6 md:py-6">
      <div className="max-w-5xl ml-auto rounded-3xl bg-gradient-to-b from-white to-neutral-100 dark:from-[#161617] dark:to-[#0F0F10] shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-black/5 dark:ring-white/5 px-8 py-10 md:p-20 overflow-hidden">

        <HeroSection />
 
        <Projects />
     
        <Recommendations />

        <LatestPostsClient posts={posts} />
      </div>
    </div>
  );
}
