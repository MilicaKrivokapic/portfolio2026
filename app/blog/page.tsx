import { getBlogPosts } from "app/lib/posts";
import BlogGrid from "app/components/blog-grid";
import BlogHeader from "app/components/blog-header";

export const metadata = {
  title: "Blog",
  description: "Nextfolio Blog",
};

export default async function BlogPosts({ searchParams }: { searchParams: Promise<{ tag?: string }> }) {
  const allBlogs = getBlogPosts();
  const { tag } = await searchParams;
  const initialTag = tag;

  return (
    <div className="max-w-6xl mx-auto px-6">
      <section className="py-12 md:py-20">
        <BlogHeader />
        <BlogGrid posts={allBlogs as any} initialTag={initialTag} />
      </section>
    </div>
  );
}
