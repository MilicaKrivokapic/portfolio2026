'use client';
import Link from 'next/link';
import Image from 'next/image';
import { projectData } from '../config/mockData';
import { useLanguage } from '../context/language-context';

export default function Projects() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        {t('projects.featuredWork')}
      </h2>
      <div className="grid grid-cols-1 gap-20">
        {projectData.map((project, index) => {
          const isExternalLink = project.link.startsWith('http');
          const LinkComponent = isExternalLink ? 'a' : Link;
          const linkProps = isExternalLink ? {
            href: project.link,
            target: "_blank",
            rel: "noopener noreferrer"
          } : { href: project.link };

          return (
            <LinkComponent
              {...linkProps}
              key={index}
              className="group relative flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="w-full md:w-2/3 aspect-video relative overflow-hidden rounded-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full md:w-1/3 space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-surface-light dark:bg-surface-dark rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="mt-3 px-6 py-2 rounded-lg bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-100 dark:hover:bg-neutral-900 active:bg-gray-200 dark:active:bg-neutral-900 transition-all duration-200 ease-in-out hover:bg-stone-50 hover:scale-[0.97] shadow-accent-light/40 dark:shadow-accent-dark shadow-[0_0_12px_rgba(255,51,102,0.4)] hover:shadow-[0_0_8px_rgba(255,51,102,0.4)] dark:hover:shadow-[0_0_8px_rgba(249,58,106,0.6)] cursor-pointer">
                  {t('projects.seeProject')}
                </button>
              </div>
            </LinkComponent>
          );
        })}
      </div>
    </section>
  );
}
