'use client';

import React from 'react';
import Link from 'next/link';
import { recommendationsData } from '../config/mockData';
import { useLanguage } from '../context/language-context';
import Panda from './icons/panda';
import Seahorse from './icons/seahorse';
import Elephant from './icons/elephant';
import Hedgehog from './icons/hedgehog';
import Toucan from './icons/toucan';
import BeeIcon from './icons/bee';

type AnimalIconType = 'panda-bear' | 'seahorse' | 'elephant' | 'hedgehog' | 'toucan' | 'bee';

const AnimalIcons: Record<AnimalIconType, JSX.Element> = {
  'panda-bear': (
    <Panda />
  ),
  'seahorse': (
    <Seahorse />
  ),
  'elephant': (
   <Elephant />
  ),
  'hedgehog': (
   <Hedgehog />
  ),
  'toucan': (
   <Toucan />
  ),
  'bee': (
   <BeeIcon />
  )
};

interface Recommendation {
  name: string;
  role: {
    en: string;
    fi: string;
  };
  email: string;
  text: {
    en: string;
    fi: string;
  };
  icon: AnimalIconType;
}

export default function Recommendations() {
  const { t, language } = useLanguage();

  return (
    <section className="pt-24 md:py-0 md:mb-20 xl:mb-32 space-y-8">
      <div className="mb-14 md:mb-24">
        <h2 className="text-2xl md:text-3xl font-bold relative inline-block">
          {t('recommendations.title')}
          <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent-light dark:bg-accent-dark rounded-full" />
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-28"> {/* Increased vertical spacing between rows */}
        {(recommendationsData as Recommendation[]).map((recommendation, index) => (
          <div key={index} className="relative">
            <div className="bg-stone-100 dark:bg-zinc-800/90 rounded-2xl shadow-2xs dark:shadow-sm border-2 border-stone-200/60 dark:border-zinc-700/50">
              {/* Icon container - positioned relative to the card */}
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 
                          w-24 h-24 rounded-full
                          bg-white dark:bg-zinc-900
                          flex items-center justify-center
                          border-2 border-stone-200/60 dark:border-zinc-800
                          shadow-md dark:shadow-x1
                          z-10">
                <div className="w-12 h-12 text-purple-900 dark:text-amber-400"> {/* Changed from w-8 h-12 to w-16 h-16 */}
                  {AnimalIcons[recommendation.icon]}
                </div>
              </div>
              
              {/* Increase top padding to accommodate larger icon */}
              <div className="pt-16 p-4 md:pt-16 md:p-8"> {/* Changed from pt-10 to pt-16 */}
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {recommendation.name}
                    </h3>
                    {recommendation.role && (
                      <p className="text-sm text-purple-600 dark:text-amber-400 mt-1">
                        {recommendation.role[language]}
                      </p>
                    )}
                    {recommendation.email.startsWith('mailto:') ? (
                      <a href={recommendation.email}
                         className="text-sm text-purple-600 dark:text-amber-400 mt-0.5 
                                  block hover:underline transition-colors">
                        {recommendation.email.replace('mailto:', '')}
                      </a>
                    ) : recommendation.email === 'ask for contact details' ? (
                      <Link href="/contact"
                            className="text-sm text-purple-600 dark:text-amber-400 mt-0.5 
                                     block hover:underline transition-colors">
                        {t('recommendations.askForContactDetails')}
                      </Link>
                    ) : (
                      <p className="text-sm text-purple-600 dark:text-amber-400 mt-0.5">
                        {recommendation.email}
                      </p>
                    )}
                  </div>
                  <blockquote className="text-gray-700 dark:text-gray-300 italic 
                                     leading-relaxed relative px-4 py-3 border-l 
                                     border-purple-700 dark:border-accent-dark
                                     bg-gray-50 dark:bg-zinc-700/40 rounded-r-lg">
                    "{recommendation.text[language]}"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
