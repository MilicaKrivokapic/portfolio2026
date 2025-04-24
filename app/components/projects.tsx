import Link from 'next/link';
import Image from 'next/image';
import { projectData } from '../config/mockData';

export default function Projects() {
  return (
    <section className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Featured Work
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
              </div>
            </LinkComponent>
          );
        })}
      </div>
    </section>
  );
}
