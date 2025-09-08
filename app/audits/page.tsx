import Link from "next/link";
import { formatDate, getAuditPosts } from "app/lib/posts";

export const metadata = {
  title: "Accessibility Audits",
  description: "Accessibility audit case studies and reports",
};

function getReadTime(text: string) {
  const wordsPerMinute = 120;
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.round(words / wordsPerMinute));
}

export default function AuditPosts() {
  let allAudits = getAuditPosts();

  return (
    <div className="max-w-4xl mx-auto px-6">
      <section className="py-12 md:py-20">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark bg-clip-text text-transparent animate-gradient bg-300% mb-12" style={{ lineHeight: 'unset' }}>
          Accessibility Audits
        </h1>
        <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
          {allAudits
            .sort((a, b) => {
              if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
                return -1;
              }
              return 1;
            })
            .map((post) => (
              <div key={post.slug} className="py-8">
                <Link href={`/audits/${post.slug}`} className="block group">
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
                        <span className="hidden sm:inline">•</span>
                        <span>{getReadTime(post.content)} min read</span>
                      </div>
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


