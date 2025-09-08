import { getAuditPosts } from "app/lib/posts";
import BlogGrid from "app/components/blog-grid";

export const metadata = {
  title: "Accessibility Audits",
  description: "Accessibility audit case studies and reports",
};

export default function AuditPosts({ searchParams }: { searchParams?: { tag?: string } }) {
  let allAudits = getAuditPosts();
  const initialTag = searchParams?.tag;

  return (
    <div className="max-w-6xl mx-auto px-6">
      <section className="py-12 md:py-20">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark bg-clip-text text-transparent animate-gradient bg-300% mb-6" style={{ lineHeight: 'unset' }}>
          Accessibility Audits
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-10">Case studies and reports focused on practical WCAG improvements.</p>
        <BlogGrid posts={allAudits as any} initialTag={initialTag} />
      </section>
    </div>
  );
}


