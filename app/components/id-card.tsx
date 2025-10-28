'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../context/language-context';
import BriefcaseSolidFull from './icons/BriefcaseSolidFull';
import MusicSolidFull from './icons/MusicSolidFull';
import UpRightFromSquareSolidFull from './icons/UpRightFromSquareSolidFull';

export default function IdCard() {
  const { language } = useLanguage();

  const content = {
    en: {
      nowWorkingOn: 'Now working on',
      projectName: 'Parhaat Pöntöt',
      projectSub: 'Accessibility Audit',
      nowListeningTo: 'Now listening to',
      music: 'Japanese City Pop',
      accompaniedBy: 'Accompanied by',
      companionName: 'Vaapukka the Home Officer',
    },
    fi: {
      nowWorkingOn: 'Työstän parhaillaan',
      projectName: 'Parhaat Pöntöt',
      projectSub: 'Saavutettavuusauditointi',
      nowListeningTo: 'Kuuntelen nyt',
      music: 'Japanilaista city poppia',
      accompaniedBy: 'Seurana',
      companionName: 'Vaapukka, kotitoimiston päällikkö',
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-3">
      {/* Working on field */}
      <div className="flex gap-3">
        <div className="pr-2 border-l-4 border-accent-light/50 dark:border-accent-dark/50 pl-4">
          <div className="text-xs font-mono uppercase text-gray-700 dark:text-gray-300 mb-1">
            {content[language].nowWorkingOn}
          </div>
          <Link 
            href="/projects/parhaat-pontot"
            className="font-semibold text-lg md:text-base text-accent-light dark:text-accent-dark hover:underline decoration-2 inline-block"
          >
            {content[language].projectName}
          </Link>
          <div className="text-sm text-gray-700 dark:text-gray-300">
            {content[language].projectSub}
          </div>
        </div>
        <BriefcaseSolidFull className="w-5 h-5 flex-shrink-0 text-accent-light dark:text-accent-dark self-center" />
      </div>

      {/* Listening to field */}
      <div className="flex gap-3">
        <div className="pr-2 border-l-4 border-accent-light/50 dark:border-accent-dark/50 pl-4">
          <div className="text-xs font-mono uppercase text-gray-700 dark:text-gray-300 mb-1">
            {content[language].nowListeningTo}
          </div>
          <a 
            href="https://www.youtube.com/watch?v=UaIjnejqfJg&list=RDUaIjnejqfJg&start_radio=1"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-lg md:text-base text-gray-900 dark:text-gray-300 hover:text-accent-light dark:hover:text-accent-dark inline group"
          >
            {content[language].music}
            <UpRightFromSquareSolidFull className="ml-1.5 inline-block align-middle w-5 h-5 md:w-4 md:h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
        <MusicSolidFull className="w-5 h-5 flex-shrink-0 text-accent-light dark:text-accent-dark self-center" />
      </div>
      
      {/* Accompanied by field */}
      <div className="flex gap-3">
        <div className="pr-2 border-l-4 border-accent-light/50 dark:border-accent-dark/50 pl-4">
          <div className="text-xs font-mono uppercase text-gray-700 dark:text-gray-300 mb-1">
            {content[language].accompaniedBy}
          </div>
          <div className=" text-lg md:text-base text-gray-900 dark:text-gray-300">
            {content[language].companionName}
          </div>
        </div>
        <div className="self-center flex-shrink-0">
          <Image 
            src="/vaapu_cro.png" 
            alt="" 
            width={100} 
            height={100} 
            className="w-10 h-10 md:w-16 md:h-16 rounded-full object-cover" 
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}

