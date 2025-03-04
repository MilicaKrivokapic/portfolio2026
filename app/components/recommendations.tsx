'use client';

import React from 'react';
import { recommendationsData } from '../config/mockData';
import { useLanguage } from '../context/language-context';

type AnimalIconType = 'fox' | 'owl' | 'bear' | 'deer';

const AnimalIcons: Record<AnimalIconType, JSX.Element> = {
  fox: (
    <svg viewBox="0 0 24 24" className="w-12 h-12 text-accent-light dark:text-accent-dark">
      <path fill="currentColor" d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z"/>
    </svg>
  ),
  owl: (
    <svg viewBox="0 0 24 24" className="w-12 h-12 text-accent-light dark:text-accent-dark">
      <path fill="currentColor" d="M12,16C12.56,16 13,16.44 13,17C13,17.56 12.56,18 12,18C11.44,18 11,17.56 11,17C11,16.44 11.44,16 12,16M12,8C12.56,8 13,8.44 13,9C13,9.56 12.56,10 12,10C11.44,10 11,9.56 11,9C11,8.44 11.44,8 12,8M12,4C14.21,4 16,5.79 16,8C16,9.5 15.2,10.77 14,11.46V10.24C14.61,9.69 15,8.89 15,8C15,6.34 13.66,5 12,5C10.34,5 9,6.34 9,8C9,8.89 9.39,9.69 10,10.24V11.46C8.8,10.77 8,9.5 8,8C8,5.79 9.79,4 12,4M12,18C14.21,18 16,16.21 16,14C16,12.5 15.2,11.23 14,10.54V11.76C14.61,12.31 15,13.11 15,14C15,15.66 13.66,17 12,17C10.34,17 9,15.66 9,14C9,13.11 9.39,12.31 10,11.76V10.54C8.8,11.23 8,12.5 8,14C8,16.21 9.79,18 12,18Z"/>
    </svg>
  ),
  bear: (
    <svg viewBox="0 0 24 24" className="w-12 h-12 text-accent-light dark:text-accent-dark">
      <path fill="currentColor" d="M15.5,9.5C15.5,10.3 14.8,11 14,11C13.2,11 12.5,10.3 12.5,9.5C12.5,8.7 13.2,8 14,8C14.8,8 15.5,8.7 15.5,9.5M8.5,9.5C8.5,10.3 7.8,11 7,11C6.2,11 5.5,10.3 5.5,9.5C5.5,8.7 6.2,8 7,8C7.8,8 8.5,8.7 8.5,9.5M15.5,14C15.5,14.8 14.8,15.5 14,15.5C13.2,15.5 12.5,14.8 12.5,14C12.5,13.2 13.2,12.5 14,12.5C14.8,12.5 15.5,13.2 15.5,14M8.5,14C8.5,14.8 7.8,15.5 7,15.5C6.2,15.5 5.5,14.8 5.5,14C5.5,13.2 6.2,12.5 7,12.5C7.8,12.5 8.5,13.2 8.5,14M12,3C16.4,3 20,5.1 20,7.5C20,9.9 16.4,12 12,12C7.6,12 4,9.9 4,7.5C4,5.1 7.6,3 12,3M12,17.5C7.6,17.5 4,15.4 4,13C4,10.6 7.6,8.5 12,8.5C16.4,8.5 20,10.6 20,13C20,15.4 16.4,17.5 12,17.5Z"/>
    </svg>
  ),
  deer: (
    <svg viewBox="0 0 24 24" className="w-12 h-12 text-accent-light dark:text-accent-dark">
      <path fill="currentColor" d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z"/>
    </svg>
  )
};

interface Recommendation {
  name: string;
  role: string;
  email: string;
  text: string;
  icon: AnimalIconType;
}

export default function Recommendations() {
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        {t('recommendations.title')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {(recommendationsData as Recommendation[]).map((recommendation, index) => (
          <div
            key={index}
            className="p-6 bg-surface-light dark:bg-surface-dark rounded-xl hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                {AnimalIcons[recommendation.icon]}
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-semibold text-primary-light dark:text-primary-dark">
                    {recommendation.name}
                  </h3>
                  <p className="text-sm text-muted-light dark:text-muted-dark">
                    {recommendation.role}
                  </p>
                  <p className="text-sm text-accent-light dark:text-accent-dark">
                    {recommendation.email}
                  </p>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 italic">
                  "{recommendation.text}"
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
