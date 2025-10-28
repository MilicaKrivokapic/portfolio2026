import type { Metadata } from "next";
import type { ProjectGridItem } from "app/components/project-grid";
import { projectData } from "app/config/mockData";
import ProjectsFilteredGrid from "app/components/projects-filtered-grid";

export const metadata: Metadata = {
  title: "Projects",
  description: "Nextfolio Projects",
};

export default async function Projects({ searchParams }: { searchParams: Promise<{ tag?: string }> }) {
  const { tag } = await searchParams;
  const initialTag = tag;

  const allItems: (ProjectGridItem & { allTags?: string[] })[] = projectData.map((p) => ({
    title: p.title,
    summary: p.description,
    href: p.link || '#',
    image: p.image,
    tags: p.tags,
    allTags: p.tags,
  }));


  return (
    <div className="px-4 md:px-6 py-6 md:py-10">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-white to-neutral-100 dark:from-[#161617] dark:to-[#0F0F10] shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-black/5 dark:ring-white/5 p-6 md:p-20">
        <section className="py-6 md:py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
          <ProjectsFilteredGrid items={allItems} initialTag={initialTag} />
        </section>
      </div>
    </div>
  );
}
