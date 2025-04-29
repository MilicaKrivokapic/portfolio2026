import React from "react";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import { MDXRemote } from 'next-mdx-remote';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { highlight } from "sugar-high";
import { CaptionComponent } from "./caption";
import { YouTubeComponent } from "./youtube";
import { ImageGrid } from "./image-grid";
import "katex/dist/katex.min.css";

function CustomLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { href = '#' } = props;
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }
  if (href.startsWith("#")) {
    return <a {...props} />;
  }
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props: ImageProps) {
  return <Image className="rounded-lg" {...props} />;
}

interface CodeProps {
  children: string;
  [key: string]: any;
}

function Code({ children, ...props }: CodeProps) {
  const codeHTML = highlight(children);
  return (
    <code {...props} dangerouslySetInnerHTML={{ __html: codeHTML }} />
  );
}

function Table({ children, ...props }: React.TableHTMLAttributes<HTMLTableElement>) {
  return (
    <table className="border-collapse border w-full my-4" {...props}>
      {children}
    </table>
  );
}

interface StrikethroughProps {
  children: React.ReactNode;
}

function Strikethrough(props: StrikethroughProps) {
  return <del>{props.children}</del>;
}

interface CalloutProps {
  emoji: React.ReactNode;
  children: React.ReactNode;
}

function Callout(props: CalloutProps) {
  return (
    <div className="px-4 py-3 bg-[#F7F7F7] dark:bg-[#181818] rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout leading-relaxed">{props.children}</div>
    </div>
  );
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

function createHeading(level: number) {
  interface HeadingProps {
    children: React.ReactNode;
  }
  
  const Heading = ({ children }: HeadingProps) => {
    const slug = slugify(children as string);
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    return (
      <Tag id={slug}>
        <a href={`#${slug}`} className="anchor">
          #
        </a>
        {children}
      </Tag>
    );
  };

  return Heading;
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  a: CustomLink,
  Image: RoundedImage,
  pre: Code,
  table: Table,
  del: Strikethrough,
  Callout,
  Caption: CaptionComponent,
  YouTube: YouTubeComponent,
  ImageGrid,
} as const;

interface CustomMDXProps {
  source: MDXRemoteSerializeResult;
}

export function CustomMDX(props: CustomMDXProps) {
  return (
    <article className="prose prose-quoteless prose-neutral dark:prose-invert">
      <MDXRemote {...props.source} components={components} />
    </article>
  );
}
