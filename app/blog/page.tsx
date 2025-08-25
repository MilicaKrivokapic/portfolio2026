import Link from "next/link";
import { formatDate, getBlogPosts } from "app/lib/posts";
{/*  import { LikeCounter } from "../components/like-counter"; 
import fs from 'fs';
import path from 'path'; */}

export const metadata = {
  title: "Blog",
  description: "Nextfolio Blog",
};

export default function BlogPosts() {
  let allBlogs = getBlogPosts();
  // let likes: Record<string, number> = {};
  
 {/*  try {
    const likesPath = path.join(process.cwd(), 'content', 'likes.json');
    if (fs.existsSync(likesPath)) {
       = JSON.parselikes(fs.readFileSync(likesPath, 'utf-8'));
    }
  } catch (error) {
    console.error('Error reading likes:', error);
  } */}

  return (
    <div className="max-w-4xl mx-auto px-6">
      <section className="py-12 md:py-20">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark bg-clip-text text-transparent animate-gradient bg-300% mb-12" style={{ lineHeight: 'unset' }}>
          Blog
        </h1>
        <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
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
              <div key={post.slug} className="py-8">
                <Link
                  href={`/blog/${post.slug}`}
                  className="block group"
                >
                  <article className="space-y-4">
                    <h2 className="text-2xl font-semibold text-primary-light dark:text-primary-dark group-hover:text-accent-light dark:group-hover:text-accent-dark">
                      {post.metadata.title}
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 line-clamp-3">
                      {post.metadata.summary}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                        <span role="img" aria-label="calendar">📅</span>
                        <time>{formatDate(post.metadata.publishedAt, false)}</time>
                      </div>
                      {/* <LikeCounter likes={likes[post.slug] || 0} /> */}

                    </div>
                  </article>
                </Link>
              </div>
            ))}
        <div className="mt-10 border-b border-neutral-200 dark:border-neutral-800 w-full" />
        </div>
      </section>
    </div>
  );
}
