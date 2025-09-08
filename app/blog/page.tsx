import { getBlogPosts } from "app/lib/posts";
import BlogGrid from "app/components/blog-grid";

export const metadata = {
  title: "Blog",
  description: "Nextfolio Blog",
};

export default function BlogPosts({ searchParams }: { searchParams?: { tag?: string } }) {
  const allBlogs = getBlogPosts();
  const initialTag = searchParams?.tag;

  return (
    <div className="max-w-6xl mx-auto px-6">
      <section className="py-12 md:py-20">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark bg-clip-text text-transparent animate-gradient bg-300% mb-6" style={{ lineHeight: 'unset' }}>
          Blog
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-10">Exploring design trends, sharing lessons, and offering a peek behind the scenes.</p>
        <BlogGrid posts={allBlogs as any} initialTag={initialTag} />
      </section>
    </div>
  );
}
