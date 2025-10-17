'use client';
import { useState } from 'react';
import { useLanguage } from '../context/language-context';
import Button from './ui/Button';
import Image from 'next/image';

export default function AboutMe() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-xl leading-relaxed mb-6">
          {t('about.summary')}
        </p>
        
        <div className={`transition-all duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
          {/* Grid layout with text and image */}
          <section className="grid grid-cols-12 md:gap-6 items-start">
          {/* Image - appears first on mobile, side-by-side on desktop */}
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:row-start-1 md:row-span-6 order-1 md:order-2">
            <div className="relative aspect-[4/5] w-64 mx-auto md:w-full">
              {/* Mobile image */}
              <Image
                src="/mobile_about_me-test.png"
                alt="About Milica"
                fill
                className="object-contain md:hidden"
                sizes="16rem"
              />
              {/* Desktop image */}
              <Image
                src="/about-me-pic.png"
                alt="About Milica"
                fill
                className="object-contain hidden md:block"
                sizes="40vw"
              />
            </div>
          </div>            {/* Text Content - spans columns 1-7 */}
            <div className="col-span-12 md:col-span-7 md:col-start-1 md:row-start-1 order-2 md:order-1 space-y-6">
              <p className="mb-5">{t('about.intro')}</p>
              <p className="leading-relaxed">{t('about.career')}</p>
              <p className="leading-relaxed">{t('about.education')}</p>
              {t('about.transition') && <p className="leading-relaxed">{t('about.transition')}</p>}
              {t('about.current') && <p className="leading-relaxed">{t('about.current')}</p>}
              {t('about.conclusion') && <p className="leading-relaxed">{t('about.conclusion')}</p>}
            </div>
          </section>
        </div>
      </div>

      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4"
        shadow="strong"
      >
        {isExpanded ? t('about.readLess') : t('about.readMore')}
      </Button>
    </>
  );
}
