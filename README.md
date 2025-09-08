# Nextfolio

A clean, fast, and lightweight portfolio template built with [Next.js](https://nextjs.org/), [Vercel](https://vercel.com/), and [Tailwind CSS](https://tailwindcss.com/).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F1msirius%2FNextfolio)

## Technologies Used

- Framework: [Next.js](https://nextjs.org/)
- Typography: [Vercel Geist Font](https://vercel.com/font)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Analytics: [Vercel Web Analytics](https://vercel.com/docs/speed-insights) and [Speed Insights](https://vercel.com/docs/speed-insights)
- Deployment: [Vercel](https://vercel.com/)

## Features

- **[MDX](https://mdxjs.com/) Support**: Use Markdown with JSX components for blog posts.
- **Light and Dark Mode Toggle**: Switch between themes for better readability.
- **Dynamic [OG Images](https://vercel.com/docs/functions/og-image-generation)**: Auto-generate Open Graph images for sharing.
- **SEO Optimization**: Enhance search visibility with sitemap, robots.txt, and JSON-LD schema.
- **Dynamic Feed Generation**: Automatic dynamic [RSS](https://nextfolio-template.vercel.app/rss.xml), [Atom](https://nextfolio-template.vercel.app/atom.xml), and [JSON](https://nextfolio-template.vercel.app/feed.json) feeds.
- **[KaTeX](https://katex.org/) Integration**: Render mathematical expressions smoothly.
- **Performance Tracking**: Monitor web performance with [Vercel Web Analytics](https://vercel.com/docs/speed-insights) and [Speed Insights](https://vercel.com/docs/speed-insights).
- **Captions**: Add descriptive captions to photos and videos.
- **Image Grid**: Easily showcase image galleries or photos.

## Installation

Nextfolio uses [pnpm](https://pnpm.io/installation) for dependency management, so ensure it is installed on your system.

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [pnpm](https://pnpm.io/installation) to bootstrap the example:

```
pnpm create next-app --example https://github.com/1msirius/Nextfolio my-portfolio
```

Start the development server:

```
pnpm dev
```

The server will be running at [http://localhost:3000](http://localhost:3000).

## Configuration

1. Update the site metadata and social links in `app/config.ts` to set up SEO, feeds, social links, and Open Graph settings.
2. Update your routes in `app/sitemap.ts` for SEO optimization.
3. Update your blog posts in the `/content` folder.

For more information about configuration, follow the instructions in the [Getting Started](https://nextfolio-template.vercel.app/blog/getting-started#configuration) post.

## Contributing

Contributions are welcome! To get involved, just push your code to the repo. Whether you're enhancing existing features or adding new ones, your efforts are greatly appreciated!

## Licence

Nextfolio is open-source and released under the MIT License.

## Writing Blog Posts:

Create your blog posts as .mdx files in the content directory
Each post needs a frontmatter section at the top with metadata:
-
Writing Content: You can use several features in your blog posts:

Regular Markdown syntax (headings, bold, italic, lists, etc.)
Images using Next.js Image component
Code blocks with syntax highlighting
Tables
Special components like:
Callouts (for important notes)
Image grids (for photo galleries)
Captions (for balanced text captions)
Custom links (automatically handles internal/external links)
Accessing Your Blog:

The main blog page is at /blog
Individual posts are accessed at /blog/[post-slug]
The slug is automatically generated from your MDX filename
Posts are sorted by date, with newest appearing first
There are already some example posts in your content directory that you can reference, like custom-mdx-examples.mdx, which shows all the available features and components you can use in your blog posts.

## Adding Images to Blog Posts

You can add images to your blog posts in two main ways:

### 1. Blog Post Thumbnail (for Blog List)

To show a thumbnail image for your post on the /blog page, add an `image` field to your post’s frontmatter:

```yaml
---
title: "My Blog Post"
publishedAt: "2025-05-22"
summary: "A summary of my post."
image: "/images/my-image.jpg" # Path to your image in the public/images folder
---
```

Place your image in the `public/images` directory (e.g., `public/images/my-image.jpg`).

### 2. Embedding Images in MDX Content

You can embed images directly in your post content using the Next.js `<Image />` component:

```mdx
import Image from 'next/image'

<Image
  src="/images/my-image.jpg"
  alt="Description of image"
  width={600}
  height={400}
/>
```

- Make sure the `src` path is relative to the `public` directory.
- Adjust `width` and `height` as needed.

### Tips

- For image galleries, use the custom `<ImageGrid />` component (see `content/custom-mdx-examples.mdx` for examples).
- For captions, use the `<Caption />` component.

<!-- BlogCard removed: component and documentation deleted -->