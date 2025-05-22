import Link from "next/link";
import { formatDate, getBlogPosts } from "app/lib/posts";
import { LikeCounter } from "../components/like-counter";
import fs from 'fs';
import path from 'path';
import Image from "next/image";

export const metadata = {
  title: "Blog",
  description: "Nextfolio Blog",
};

export default function BlogPosts() {
  let allBlogs = getBlogPosts();
  let likes: { [key: string]: number } = {};
  
  try {
    const likesPath = path.join(process.cwd(), 'content', 'likes.json');
    if (fs.existsSync(likesPath)) {
      likes = JSON.parse(fs.readFileSync(likesPath, 'utf-8'));
    }
  } catch (error) {
    console.error('Error reading likes:', error);
  }

  return (
    <div className="max-w-4xl mx-auto px-6">
      <section className="py-12 md:py-20">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark bg-clip-text text-transparent animate-gradient bg-300% mb-12">
          Blog
        </h1>
        <div className="divide-y divide-neutral-300 dark:divide-neutral-700">
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
              <div key={post.slug} className="py-10">
                <Link
                  href={`/blog/${post.slug}`}
                  className="block group"
                >
                  <article className="flex flex-row items-center justify-between gap-6">
                    <div className="flex-1 space-y-4">
                      <h2 className="text-2xl font-semibold text-primary-light dark:text-primary-dark group-hover:text-accent-light dark:group-hover:text-accent-dark">
                        {post.metadata.title}
                      </h2>
                      <p className="text-neutral-600 dark:text-neutral-400 line-clamp-3">
                        {post.metadata.summary}
                      </p>
                      <div className="flex flex-col gap-2 items-start">
                        <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                          <span role="img" aria-label="calendar">📅</span>
                          <time>{formatDate(post.metadata.publishedAt, false)}</time>
                        </div>
                        <LikeCounter likes={likes[post.slug] || 0} />
                      </div>
                    </div>
                    {post.metadata.image && (
                      <div className="flex-shrink-0 ml-4 rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-800 w-[120px] h-[80px]">
                        <Image
                          src={post.metadata.image}
                          alt={post.metadata.title}
                          width={120}
                          height={80}
                          className="object-cover object-center w-full h-full rounded-lg transition-transform group-hover:scale-105 duration-200"
                          priority={false}
                        />
                      </div>
                    )}
                  </article>
                </Link>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
