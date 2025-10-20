'use client';

import React from 'react';
import { recommendationsData } from '../config/mockData';
import { useLanguage } from '../context/language-context';
import Panda from './icons/panda';
import Seahorse from './icons/seahorse';
import Elephant from './icons/elephant';
import Hedgehog from './icons/hedgehog';

type AnimalIconType = 'panda-bear' | 'seahorse' | 'elephant' | 'hedgehog';

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
  )
};

interface Recommendation {
  name: string;
  role: string;
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
    <section className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-24 text-center"> {/* Changed from mb-16 to mb-24 */}
        {t('recommendations.title')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20"> {/* Changed from gap-16 to gap-20 */}
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
                    <p className="text-sm text-purple-600 dark:text-amber-400 mt-1">
                      {recommendation.role}
                    </p>
                    <a href={recommendation.email}
                       className="text-sm text-purple-600 dark:text-amber-400 mt-0.5 
                                block hover:underline transition-colors">
                      {recommendation.email.replace('mailto:', '')}
                    </a>
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
