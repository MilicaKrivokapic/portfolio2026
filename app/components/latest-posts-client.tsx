'use client';
import BlogGrid from './blog-grid';
import type { BlogListItem } from './blog-grid';
import LatestPostsHeader from './latest-posts_header';
import Button from './ui/Button';
import SquareUpRight from './icons/SquareUpRight';

interface LatestPostsClientProps {
  posts: BlogListItem[];
}

export default function LatestPostsClient({ posts }: LatestPostsClientProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section aria-labelledby="latest-posts-heading" className="pt-24 md:py-0 md:mb-20 xl:mb-32 space-y-8">
      <LatestPostsHeader />
      <BlogGrid posts={posts} basePath="/blog" showDate showFilters={false} />
      <div className="mt-6 flex">
        <Button 
          as="a" 
          href="/blog" 
          aria-label="See all blog posts" 
          className="group md:text-lg text-lg md:px-8 px-6 md:py-3 py-3 font-semibold md:w-auto w-full text-center"
          shadow="strong"
        >
          <span className="flex items-center justify-center gap-2">
            See all blog posts
            <SquareUpRight />
          </span>
        </Button>
      </div>
    </section>
  );
}
