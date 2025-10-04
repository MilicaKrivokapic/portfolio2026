'use client';
import AboutMe from '../components/about-me';
import Skills from '../components/skills';
import { useLanguage } from '../context/language-context';

export default function AboutPage() {
  const { t } = useLanguage();
  
  return (
    <div className="px-6 py-12 md:py-24 space-y-16 md:space-y-32 max-w-4xl mx-auto">
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
  );
}
