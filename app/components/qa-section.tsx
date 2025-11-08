'use client';

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { qaData } from '../config/mockData';
import { useLanguage } from '../context/language-context';

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

interface QAItemProps {
  id: string;
  question: string;
  answer: string;
  isFirst: boolean;
  isLast: boolean;
  defaultOpen?: boolean;
}

function QAItem({ id, question, answer, isFirst, isLast, defaultOpen = false }: QAItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const buttonId = `${id}-trigger`;
  const panelId = `${id}-panel`;

  return (
    <div
      className={cn(
        'relative border-2 border-accent-light/20 dark:border-accent-dark/20 shadow-sm overflow-hidden',
        isFirst && 'rounded-t-2xl',
        isLast && 'rounded-b-2xl',
        !isLast && 'border-b-0'
      )}
    >
      <h3 className="m-0">
        <button
          id={buttonId}
          type="button"
          aria-controls={panelId}
          aria-expanded={isOpen}
          className={cn(
            'w-full text-left flex items-center justify-between gap-3 px-4 md:px-6 py-4 md:py-5',
            'bg-accent-light dark:bg-accent-dark text-white dark:text-black',
            'hover:bg-accent-light/90 dark:hover:bg-[#6f5d3c] transition-colors',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-light dark:focus-visible:ring-amber-700'
          )}
          onClick={() => setIsOpen((o) => !o)}
        >
          <span className="font-semibold text-lg md:text-xl">
            {question}
          </span>
          <FaChevronDown
            className={cn(
              'w-5 h-5 transition-transform duration-300 flex-shrink-0',
              isOpen ? 'rotate-180' : 'rotate-0'
            )}
          />
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={cn(
          'bg-white dark:bg-neutral-900/60',
          'px-4 md:px-6',
          'grid transition-all duration-300 ease-in-out',
          isOpen ? 'grid-rows-[1fr] opacity-100 py-5 md:py-6' : 'grid-rows-[0fr] opacity-0 py-0'
        )}
      >
        <div className="overflow-hidden">
          <p className="text-base md:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function QASection() {
  const { t, language } = useLanguage();

  return (
    <section className="space-y-6">
      <h2 className="text-3xl md:text-5xl font-bold font-heading">
        {t('qa.title')}
      </h2>
      
      <div className="max-w-4xl">
        {qaData.map((qa, index) => (
          <QAItem
            key={`qa-${index}`}
            id={`qa-${index}`}
            question={qa.question[language]}
            answer={qa.answer[language]}
            isFirst={index === 0}
            isLast={index === qaData.length - 1}
            defaultOpen={false}
          />
        ))}
      </div>
    </section>
  );
}

