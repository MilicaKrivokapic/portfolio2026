import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { getAuditPosts } from "app/lib/posts";
import { metaData } from "app/config";
import { serialize } from 'next-mdx-remote/serialize';
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export async function generateStaticParams() {
  let posts = getAuditPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata | undefined> {
  const { slug } = await params;
  let post = getAuditPosts().find((post) => post.slug === slug);
  if (!post) return;

  let { title, publishedAt: publishedTime, summary: description, image } = post.metadata;
  let ogImage = image ? image : `${metaData.baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${metaData.baseUrl}/audits/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

function getReadTime(text: string) {
  const wordsPerMinute = 120;
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.round(words / wordsPerMinute));
}

export default async function AuditPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let allPosts = getAuditPosts();
  let postIndex = allPosts.findIndex((p) => p.slug === slug);
  let prevPost = postIndex > 0 ? allPosts[postIndex - 1] : null;
  let nextPost = postIndex < allPosts.length - 1 ? allPosts[postIndex + 1] : null;
  let post = allPosts[postIndex];

  if (!post) notFound();

  const source = await serialize(post.content);
  const readTime = getReadTime(post.content);
  const bannerImage = post.metadata.image || "/opengraph-image.png";

  return (
    <section className="flex flex-col items-center w-full px-4">
      <div className="w-full max-w-5xl mb-4">
        <nav aria-label="Breadcrumb" className="text-sm text-neutral-500 dark:text-neutral-400">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">Home</Link>
            </li>
            <li aria-hidden="true" className="opacity-60">/</li>
            <li>
              <Link href="/projects" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">Projects</Link>
            </li>
            <li aria-hidden="true" className="opacity-60">/</li>
            <li className="truncate max-w-[50vw] md:max-w-none" aria-current="page">{post.metadata.title}</li>
          </ol>
        </nav>
      </div>
      <article className="prose prose-neutral dark:prose-invert max-w-5xl w-full mx-auto bg-white dark:bg-neutral-900 rounded-lg shadow-md p-8 md:p-12 mt-2 mb-16 text-[1.15rem] md:text-[1.2rem]">
        <div className="w-full mb-8 rounded-lg overflow-hidden">
          <Image
            src={bannerImage}
            alt={post.metadata.title}
            width={1200}
            height={500}
            className="w-full h-auto max-h-[800px] object-contain rounded-lg"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-5xl text-left font-extrabold mb-2 leading-tight">
          {post.metadata.title}
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 mb-8 text-sm text-neutral-500 dark:text-neutral-400">
          <span>{readTime} min read</span>
        </div>
        <CustomMDX source={source} />
        {post.metadata.tags && (
          <div className="mt-10 flex flex-wrap gap-2">
            {post.metadata.tags.split(',').map((tag: string) => {
              const trimmed = tag.trim();
              return (
                <a
                  key={trimmed}
                  href={`/projects?tag=${encodeURIComponent(trimmed)}`}
                  className="inline-block bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-3 py-1 rounded-full text-xs font-medium hover:bg-accent-light hover:text-white dark:hover:bg-accent-dark transition-colors"
                >
                  #{trimmed}
                </a>
              );
            })}
          </div>
        )}
        <div className="flex justify-between items-center mt-12 gap-2">
          {prevPost ? (
            <div className="flex flex-col items-start max-w-[45%]">
              <span className="text-sm md:text-base font-semibold text-neutral-700 dark:text-neutral-100 mb-1 flex items-center gap-1">
                <FaArrowLeft className="w-5 h-5 inline mr-1" /> Previous
              </span>
              <a href={`/audits/${prevPost.slug}`} className="truncate text-base md:text-lg text-accent-light dark:text-accent-dark hover:underline font-semibold">
                {prevPost.metadata.title}
              </a>
            </div>
          ) : <span />}
          {nextPost ? (
            <div className="flex flex-col items-end max-w-[45%]">
              <span className="text-sm md:text-base font-semibold text-neutral-700 dark:text-neutral-100 mb-1 flex items-center gap-1 justify-end">
                Up next <FaArrowRight className="w-5 h-5 inline ml-1" />
              </span>
              <a href={`/audits/${nextPost.slug}`} className="truncate text-base md:text-lg text-accent-light dark:text-accent-dark hover:underline font-semibold text-right">
                {nextPost.metadata.title}
              </a>
            </div>
          ) : <span />}
        </div>
      </article>
    </section>
  );
}


