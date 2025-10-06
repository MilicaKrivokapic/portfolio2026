'use client';
import AboutMe from '../components/about-me';
import Skills from '../components/skills';
import { useLanguage } from '../context/language-context';

export default function AboutPage() {
  const { t } = useLanguage();
  
  return (
    <div className="px-4 md:px-6 py-6 md:py-10">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-white to-neutral-100 dark:from-[#161617] dark:to-[#0F0F10] shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-black/5 dark:ring-white/5 p-10 md:p-20">
        <div className="space-y-16 md:space-y-32">
          <section className="space-y-8">
            <h1 className="text-4xl md:text-7xl font-bold font-heading">
              {t('about.title')}
              <span className="text-accent-light dark:text-accent-dark"> & My Journey</span>
            </h1>
            <AboutMe />
          </section>

          <section className="space-y-12">
            <Skills />
          </section>
        </div>
      </div>
    </div>
  );
}
