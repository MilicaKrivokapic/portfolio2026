import type { Metadata } from "next";
import type { ProjectGridItem } from "app/components/project-grid";
import { getAuditPosts } from "app/lib/posts";
import { projectData } from "app/config/mockData";
import ProjectsFilteredGrid from "app/components/projects-filtered-grid";

export const metadata: Metadata = {
  title: "Projects",
  description: "Nextfolio Projects",
};

export default async function Projects({ searchParams }: { searchParams: Promise<{ tag?: string }> }) {
  const audits = getAuditPosts();
  const { tag } = await searchParams;
  const initialTag = tag;

  function normalizeAndSplitTags(tagString?: string): string[] {
    if (!tagString) return [];
    return tagString
      .split(',')
      .map((t) => t.trim())
      .map((t) => t.replace(/^#/, ''))
      .filter(Boolean);
  }

  const itemsFromProjects: ProjectGridItem[] = projectData.map((p) => ({
    title: p.title,
    summary: p.description,
    href: p.link || '#',
    image: p.image,
    tags: p.tags,
  }));

  const itemsFromAudits: ProjectGridItem[] = audits.map((a: any) => ({
    title: a.metadata.title,
    summary: a.metadata.summary,
    href: `/audits/${a.slug}`,
    image: a.metadata.image,
    tags: normalizeAndSplitTags(a.metadata.tags),
  }));

  const allItems: (ProjectGridItem & { allTags?: string[] })[] = [
    ...itemsFromProjects.map((p) => ({ ...p, allTags: p.tags })),
    ...audits.map((a: any) => ({
      title: a.metadata.title,
      summary: a.metadata.summary,
      href: `/audits/${a.slug}`,
      image: a.metadata.image,
      tags: normalizeAndSplitTags(a.metadata.tags),
      allTags: normalizeAndSplitTags(a.metadata.tags),
    })),
  ];


  return (
    <div className="max-w-6xl mx-auto px-6">
      <section className="py-12 md:py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
        <ProjectsFilteredGrid items={allItems} initialTag={initialTag} />
      </section>
    </div>
  );
}
