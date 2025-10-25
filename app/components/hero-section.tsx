'use client';

import Link from 'next/link';
import Image from 'next/image';
import Button from './ui/Button';
import { useLanguage } from '../context/language-context';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="grid grid-cols-12 md:gap-2 items-center overflow-hidden md:mb-20 xl:mb-30">
      {/* Image - appears first on mobile, overlaps on desktop */}
      <div className="col-span-12 md:col-span-7 md:col-start-7 md:row-start-1 md:row-span-7 z-0 order-1 md:ml-8 md:order-2">
        <div className="relative aspect-[4/5] w-48 mx-auto md:w-full">
          <Image
            src="/wawe_portfolio.png"
            alt="Milica"
            fill
            priority
            className="object-contain"
            sizes="(min-width: 768px) 50vw, 12rem"
          />
        </div>
      </div>

      {/* Text Content - spans columns 1-9, rows 1-6 */}
      <div className="col-span-12 md:col-span-8 md:col-start-1 md:row-start-1 md:row-span-6 z-10 space-y-2 grid order-2 md:order-1">
        <h1 className="text-3xl sm:text-4xl md:text-5xl md:col-start-1 md:col-end-7 lg:text-6xl xl:text-7xl font-bold font-heading leading-tight break-words">
          {t('about.heroGreeting')}
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl md:col-start-1 md:col-end-7 lg:text-4xl font-semibold text-accent-light dark:text-accent-dark leading-tight">
          {t('about.heroTagline')}
        </p>
        <p className="text-xl md:col-start-1 md:col-end-3 leading-relaxed">
          {t('about.summary')}
        </p>
        <div className="flex flex-col sm:flex-row md:col-start-1 gap-4 pt-6 md:pt-4">
          <Link href="/about">
            <Button variant="secondary" shadow="strong" className="w-full sm:w-auto group md:text-lg text-lg md:px-8 px-6 md:py-3 py-3 font-semibold md:w-auto text-center">
              {t('about.aboutMeButton')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
