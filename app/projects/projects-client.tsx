'use client';

import type { ProjectGridItem } from "app/components/project-grid";
import ProjectsFilteredGrid from "app/components/projects-filtered-grid";
import { useLanguage } from "../context/language-context";

type ProjectDataItem = (typeof import("app/config/mockData").projectData)[number];

export default function ProjectsClient({
  projectData,
  initialTag,
}: {
  projectData: ProjectDataItem[];
  initialTag?: string;
}) {
  const { language } = useLanguage();

  const allItems: (ProjectGridItem & { allTags?: string[] })[] = projectData.map((p) => {
    // Use language-specific title/description if available
    const title = p.title_fi && language === 'fi' ? p.title_fi : p.title;
    const description = p.description_fi && language === 'fi' ? p.description_fi : p.description;

    return {
      title,
      summary: description,
      href: p.link || '#',
      image: p.image,
      tags: p.tags,
      allTags: p.tags,
    };
  });

  return <ProjectsFilteredGrid items={allItems} initialTag={initialTag} />;
}

