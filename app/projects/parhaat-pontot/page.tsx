'use client';

import Link from "next/link";
import PresentationCard from "app/components/PresentationCard";
import { useLanguage } from "../../context/language-context";
import { translations } from "../../i18n/translations";

export default function ParhaatPontot() {
  const { language } = useLanguage();
  const t = translations[language].parhaatPontot;

  return (
    <div className="px-4 md:px-6 py-6 md:py-10">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-white to-neutral-100 dark:from-[#161617] dark:to-[#0F0F10] shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-black/5 dark:ring-white/5 p-10 md:p-20 relative">
        {/* Sneak Peek Stamp */}
        <div className="absolute top-40 md:top-16 right-4 md:right-16 pointer-events-none opacity-50 dark:opacity-60 rotate-12 z-10">
          <div className="relative">
            <div className="border-[3px] border-accent-light dark:border-accent-dark rounded-md px-3 py-2 md:px-8 md:py-5 flex items-center justify-center bg-accent-light/5 dark:bg-accent-dark/10">
              <div className="text-center">
                <p className="text-[0.65rem] md:text-base font-bold uppercase tracking-wider text-accent-light dark:text-accent-dark">
                  {language === 'fi' ? 'Esikatselu' : 'Sneak Peek'}
                </p>
                <p className="text-[0.5rem] md:text-sm uppercase tracking-widest text-accent-light dark:text-accent-dark mt-0.5 md:mt-1">
                  {language === 'fi' ? 'Työn alla' : 'Work in Progress'}
                </p>
              </div>
            </div>
            {/* Inner border for stamp effect */}
            <div className="absolute inset-1.5 border-2 border-accent-light dark:border-accent-dark rounded-sm opacity-70"></div>
          </div>
        </div>

        <section className="py-6 md:py-12">
          <div className="mb-4">
            <nav aria-label="Breadcrumb" className="text-sm md:text-base text-neutral-500 dark:text-neutral-400">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">
                    {language === 'fi' ? 'Etusivu' : 'Home'}
                  </Link>
                </li>
                <li aria-hidden="true" className="opacity-60">/</li>
                <li>
                  <Link href="/projects" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">
                    {language === 'fi' ? 'Projektit' : 'Projects'}
                  </Link>
                </li>
                <li aria-hidden="true" className="opacity-60">/</li>
                <li className="truncate max-w-[50vw] md:max-w-none" aria-current="page">Parhaat Pöntöt</li>
              </ol>
            </nav>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.title}</h1>
          
          <p className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed">
            {t.intro}
          </p>

          <PresentationCard
            image="/mapView.jpeg"
            alt={t.cardAlt}
            heading={t.cardHeading}
            caption={t.cardCaption}
          >
            <p className="mb-4 text-base md:text-lg">
              {t.cardIntro}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base md:text-lg">
              {t.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-lg bg-accent-light/5 dark:bg-accent-dark/10 border-l-4 border-accent-light dark:border-accent-dark">
              <p className="text-base md:text-lg font-medium text-accent-light dark:text-accent-dark">
                ⛰️ {t.techNote}
              </p>
            </div>
          </PresentationCard>
          
        </section>
      </div>
    </div>
  );
}
