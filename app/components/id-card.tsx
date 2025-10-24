'use client';

import Link from 'next/link';
import { useLanguage } from '../context/language-context';

export default function IdCard() {
  const { language } = useLanguage();

  const content = {
    en: {
      nowWorkingOn: 'Now working on',
      projectName: 'Parhaat Pöntöt',
      projectSub: 'Accessibility Audit',
      nowListeningTo: 'Now listening to',
      music: 'Japanese City Pop',
    },
    fi: {
      nowWorkingOn: 'Työstän parhaillaan',
      projectName: 'Parhaat Pöntöt',
      projectSub: 'Saavutettavuusauditointi',
      nowListeningTo: 'Kuuntelen nyt',
      music: 'Japanilaista city poppia',
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Working on field */}
      <div className="border-l-4 border-accent-light dark:border-accent-dark pl-4">
        <div className="text-xs font-mono uppercase text-gray-500 dark:text-gray-500 mb-1">
          {content[language].nowWorkingOn}
        </div>
        <Link 
          href="/projects/parhaat-pontot"
          className="font-semibold text-lg text-accent-light dark:text-accent-dark hover:underline decoration-2 inline-block"
        >
          {content[language].projectName}
        </Link>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {content[language].projectSub}
        </div>
      </div>

      {/* Listening to field */}
      <div className="border-l-4 border-accent-light/50 dark:border-accent-dark/50 pl-4">
        <div className="text-xs font-mono uppercase text-gray-500 dark:text-gray-500 mb-1">
          {content[language].nowListeningTo}
        </div>
        <div className="font-semibold text-lg text-gray-900 dark:text-gray-100">
          {content[language].music} 🎵
        </div>
      </div>
    </div>
  );
}

