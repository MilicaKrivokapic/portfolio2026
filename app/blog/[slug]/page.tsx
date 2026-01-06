import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getBlogPosts } from "app/lib/posts";
import { metaData } from "app/config";
import { serialize } from "next-mdx-remote/serialize";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
{
  /* import { LikeButton } from '../../components/like-button';   */
}

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  let post = getBlogPosts().find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${metaData.baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${metaData.baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
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

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let allPosts = getBlogPosts();
  let postIndex = allPosts.findIndex((p) => p.slug === slug);
  let prevPost = postIndex > 0 ? allPosts[postIndex - 1] : null;
  let nextPost =
    postIndex < allPosts.length - 1 ? allPosts[postIndex + 1] : null;
  let post = allPosts[postIndex];

  if (!post) {
    notFound();
  }

  {
    /*// Get likes from likes.json
  let likes = 0;
  try {
    const likesPath = path.join(process.cwd(), 'content', 'likes.json');
    if (fs.existsSync(likesPath)) {
      const likesData = JSON.parse(fs.readFileSync(likesPath, 'utf-8'));
      likes = likesData[slug] || 0;
    }
  } catch (error) {
    console.error('Error reading likes:', error);
  } */
  }

  const source = await serialize(post.content);
  const readTime = getReadTime(post.content);
  const bannerImage = post.metadata.image || "/opengraph-image.png";

  return (
    <div className="px-4 md:px-6 py-6 md:py-10">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-white to-neutral-100 dark:from-[#161617] dark:to-[#0F0F10] shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-black/5 dark:ring-white/5 p-6 md:p-20">
        <section className="flex flex-col items-center w-full">
          {/* Breadcrumb Navigation */}
          <div className="w-full max-w-5xl mb-4">
            <nav
              aria-label="Breadcrumb"
              className="text-sm text-neutral-500 dark:text-neutral-400"
            >
              <ol className="flex items-center gap-2">
                <li>
                  <Link
                    href="/"
                    className="hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="opacity-60">
                  /
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true" className="opacity-60">
                  /
                </li>
                <li
                  className="truncate max-w-[50vw] md:max-w-none"
                  aria-current="page"
                >
                  {post.metadata.title}
                </li>
              </ol>
            </nav>
          </div>
          <article className="prose prose-neutral dark:prose-invert prose-xl max-w-none w-full mx-auto mt-2 mb-16 text-[1.15rem] md:text-[1.2rem]">
            <div className="w-full mb-8 rounded-lg overflow-hidden max-w-2xl">
              <Image
                src={bannerImage}
                alt={post.metadata.title}
                width={1200}
                height={500}
                style={{ objectPosition: 'left center' }}
                className="w-full h-auto max-h-[400px] md:max-h-[500px] lg:max-h-[600px] object-cover rounded-lg"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-5xl text-left font-extrabold mb-2 leading-tight">
              {post.metadata.title}
            </h1>
            <div className="flex flex-col md:flex-row items-center gap-4 mb-8 text-sm text-neutral-500 dark:text-neutral-400">
              <span>📅 {formatDate(post.metadata.publishedAt)}</span>
              {post.metadata.updatedAt && (
                <>
                  <span className="hidden md:inline">&bull;</span>
                  <span>🔄 Updated: {formatDate(post.metadata.updatedAt)}</span>
                </>
              )}
              <span className="hidden md:inline">&bull;</span>
              <span>{readTime} min read</span>
              <span className="hidden md:inline">&bull;</span>
              {/* <LikeButton postSlug={post.slug} initialLikes={likes} /> */}
            </div>
            <CustomMDX source={source} />
            {post.metadata.tags && (
              <div className="mt-10 flex flex-wrap gap-2">
                {post.metadata.tags.split(",").map((tag: string) => {
                  const trimmed = tag.trim();
                  return (
                    <a
                      key={trimmed}
                      href={`/blog?tag=${encodeURIComponent(trimmed)}`}
                      className="inline-block bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-3 py-1 rounded-full text-xs font-medium hover:bg-accent-light hover:text-white dark:hover:bg-accent-dark transition-colors"
                    >
                      #{trimmed}
                    </a>
                  );
                })}
              </div>
            )}
            {/* Prev/Next arrows with labels and links below */}
            <div className="flex justify-between items-center mt-12 gap-2">
              {prevPost ? (
                <div className="flex flex-col items-start max-w-[45%]">
                  <span className="text-sm md:text-base font-semibold text-neutral-700 dark:text-neutral-100 mb-1 flex items-center gap-1">
                    <FaArrowLeft className="w-5 h-5 inline mr-1" /> Previous
                  </span>
                  <a
                    href={`/blog/${prevPost.slug}`}
                    className="truncate text-base md:text-lg text-accent-light dark:text-accent-dark hover:underline font-semibold"
                  >
                    {prevPost.metadata.title}
                  </a>
                </div>
              ) : (
                <span />
              )}
              {nextPost ? (
                <div className="flex flex-col items-end max-w-[45%]">
                  <span className="text-sm md:text-base font-semibold text-neutral-700 dark:text-neutral-100 mb-1 flex items-center gap-1 justify-end">
                    Up next <FaArrowRight className="w-5 h-5 inline ml-1" />
                  </span>
                  <a
                    href={`/blog/${nextPost.slug}`}
                    className="truncate text-base md:text-lg text-accent-light dark:text-accent-dark hover:underline font-semibold text-right"
                  >
                    {nextPost.metadata.title}
                  </a>
                </div>
              ) : (
                <span />
              )}
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
