import { getBlogPosts } from 'app/lib/posts';
import BlogGrid from 'app/components/blog-grid';
import type { BlogListItem } from 'app/components/blog-grid';
import LatestPostsHeader from 'app/components/latest-posts_header';
import Button from 'app/components/ui/Button';

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
        <Button as="a" href="/blog" aria-label="See all blog posts">
          See all blog posts
        </Button>
      </div>
    </section>
  );
}


