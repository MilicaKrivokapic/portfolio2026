import Link from "next/link";
import { formatDate, getBlogPosts } from "app/lib/posts";

export const metadata = {
  title: "Blog",
  description: "Nextfolio Blog",
};

export default function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark bg-clip-text text-transparent animate-gradient bg-300% mb-8">
        Our Blog
      </h1>
      <div className="grid gap-6">
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group p-4 rounded-xl bg-surface-light dark:bg-surface-dark hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col space-y-2">
                <h2 className="text-xl font-semibold text-primary-light dark:text-primary-dark group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
                  {post.metadata.title}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
