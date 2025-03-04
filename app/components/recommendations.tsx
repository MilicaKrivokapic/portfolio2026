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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 px-4"> {/* Changed from gap-16 to gap-20 */}
        {(recommendationsData as Recommendation[]).map((recommendation, index) => (
          <div key={index} className="relative">
            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl">
              {/* Icon container - positioned relative to the card */}
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 
                          w-24 h-24 rounded-full
                          bg-background-light dark:bg-background-dark
                          flex items-center justify-center
                          border-4 border-surface-light dark:border-surface-dark
                          z-10">
                <div className="w-12 h-12 text-accent-light dark:text-accent-dark"> {/* Changed from w-8 h-12 to w-16 h-16 */}
                  {AnimalIcons[recommendation.icon]}
                </div>
              </div>
              
              {/* Increase top padding to accommodate larger icon */}
              <div className="pt-16 p-8"> {/* Changed from pt-10 to pt-16 */}
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-primary-light dark:text-primary-dark">
                      {recommendation.name}
                    </h3>
                    <p className="text-sm text-muted-light dark:text-muted-dark mt-1">
                      {recommendation.role}
                    </p>
                    <a href={recommendation.email}
                       className="text-sm text-accent-light dark:text-accent-dark mt-0.5 
                                block hover:underline">
                      {recommendation.email.replace('mailto:', '')}
                    </a>
                  </div>
                  <blockquote className="text-neutral-600 dark:text-neutral-400 italic 
                                     leading-relaxed relative px-4 py-2 border-l-2 
                                     border-accent-light/30 dark:border-accent-dark/30
                                     dark:bg-black/20 rounded-r-lg bg-background-light ">
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
