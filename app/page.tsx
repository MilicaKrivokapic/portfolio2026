import { getBlogPosts } from './lib/posts';
import HomeClient from './components/home-client';
import type { BlogListItem } from './components/blog-grid';

export default function Home() {
  const posts = (getBlogPosts() as unknown as BlogListItem[])
    .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
    .slice(0, 3);

  return <HomeClient posts={posts} />;
}
