'use client';
import Image from 'next/image';
import Link from 'next/link';
import { projectData } from '../config/mockData';
import { useLanguage } from '../context/language-context';
import Button from './ui/Button';
import SquareUpRight from './icons/SquareUpRight';

type ProjectItem = (typeof projectData)[number] & { underConstruction?: boolean };


export default function Projects() {
  const { t, language } = useLanguage();
  
  return (
    <section className="py-24 md:py-0">
      <div className="flex items-center justify-between gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          {t('projects.featuredWork')}
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-20">
        {projectData.slice(0, 2).map((project: ProjectItem, index) => {
          // Use translations if available
          const title = project.title_fi && language === 'fi' ? project.title_fi : project.title;
          const description = project.description_fi && language === 'fi' ? project.description_fi : project.description;
          const isUnderConstruction = project.underConstruction === true;

          return (
            <div key={index} className="group relative bg-stone-100 dark:bg-zinc-800/90 rounded-2xl shadow-2xs dark:shadow-sm border border-stone-200/60 dark:border-zinc-700/50 p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-2/3 md:shrink-0 aspect-video relative overflow-hidden rounded-xl">
                  <Image
                    src={project.image}
                    alt={title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {!isUnderConstruction && (
                    <Link href={project.link || '#'} className="absolute inset-0 z-10" aria-label={title}>
                      <span className="sr-only">{title}</span>
                    </Link>
                  )}
                  {isUnderConstruction && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                      <div className="w-full h-12 flex items-center relative">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-12" style={{ pointerEvents: 'none' }}>
                          <div className="w-full h-full flex items-center" style={{
                            backgroundImage: `repeating-linear-gradient(180deg, #FFD600 0 40px, #000 40px 50px, #FFD600 50px 90px)`,
                            backgroundSize: '90px 100%',
                            transform: 'rotate(-8deg)',
                          }}>
                            <span className="w-full text-center font-extrabold text-lg tracking-widest text-black mix-blend-multiply select-none whitespace-nowrap animate-marquee">
                              {Array(10).fill(t('projects.underConstruction')).join('  ~ ')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-full md:w-1/3 md:min-w-0">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold break-words hyphens-auto" lang={language}>{title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={`${index}-${tag}-${tagIndex}`}
                          className="text-xs md:text-sm px-3 py-1.5 rounded-full bg-white text-black ring-1 ring-black/20 dark:bg-black dark:text-white dark:ring-white/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {isUnderConstruction ? (
                    <div 
                      className="mt-8 px-6 py-2 rounded-lg bg-gray-300 text-gray-500 opacity-80 cursor-not-allowed text-center select-none"
                      tabIndex={-1}
                      aria-disabled="true"
                   
                    >
                      {t('projects.seeProject')}
                    </div>
                  ) : (
                    <Button
                    shadow="strong"
                      as="a"
                      href={project.link || '#'}
                      className="md:text-base text-sm md:px-6 px-4 md:py-2 py-1.5 mt-8 md:w-auto w-fit inline-block dark:bg-zinc-900/50 dark:hover:bg-neutral-900 dark:active:bg-neutral-800"
                    >
                      {t('projects.seeProject')}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-10 flex">
        <Button 
          as="a" 
          href="/projects" 
          aria-label={t('projects.seeAll')} 
          className="group md:text-lg text-lg md:px-8 px-6 md:py-3 py-3 font-semibold md:w-auto w-full text-center"
          shadow="strong"
        >
          <span className="flex items-center justify-center gap-2">
            {t('projects.seeAll')}
            <SquareUpRight />
          </span>
        </Button>
      </div>
    </section>
  );
}
