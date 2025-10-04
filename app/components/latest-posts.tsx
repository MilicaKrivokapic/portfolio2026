import { getBlogPosts } from 'app/lib/posts';
import BlogGrid from 'app/components/blog-grid';
import type { BlogListItem } from 'app/components/blog-grid';
import LatestPostsHeader from 'app/components/latest-posts_header';
import Button from 'app/components/ui/Button';
import SquareUpRight from 'app/components/icons/SquareUpRight';

export default function LatestPosts() {
  const posts = (getBlogPosts() as unknown as BlogListItem[])
    .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
    .slice(0, 3);

  if (!posts || posts.length === 0) return null;

  return (
    <section aria-labelledby="latest-posts-heading" className="space-y-8">
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


