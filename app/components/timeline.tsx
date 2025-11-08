'use client';
import React from 'react';
import { timelineData } from '../config/mockData';
import { useLanguage } from '../context/language-context';
import { motion } from 'framer-motion';

export default function Timeline() {
  const { t, language } = useLanguage();
  
  return (
    <div className="space-y-8 md:space-y-12">
      <h2 className="text-2xl md:text-3xl font-bold relative inline-block">
        {t('timeline.title')}
        <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent-light dark:bg-accent-dark rounded-full" />
      </h2>
      
      <ul className="relative space-y-6 md:space-y-8">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-light/40 via-accent-light/20 to-transparent dark:from-accent-dark/40 dark:via-accent-dark/20" aria-hidden="true" />
        
        {timelineData.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-12 md:pl-16"
          >
            {/* Icon dot */}
            <div className="absolute left-0 md:left-2 top-1 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-white dark:bg-[#1a1a1b] ring-2 ring-accent-light dark:ring-accent-dark flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-accent-light dark:text-accent-dark"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-2">
              <time className="inline-block px-3 py-1 text-xs md:text-sm font-mono font-medium text-accent-light dark:text-accent-dark bg-accent-light/10 dark:bg-accent-dark/10 rounded-full">
                {item.year}
              </time>
              
              <div className="rounded-xl md:rounded-2xl bg-white dark:bg-[#1a1a1b] p-4 md:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.3)] ring-1 ring-black/5 dark:ring-white/5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-foreground-light dark:text-foreground-dark">
                  {item.title[language]}
                </h3>
                
                <p className="text-sm md:text-base text-muted-light dark:text-muted-dark leading-relaxed">
                  {item.description[language]}
                </p>
                
                {item.link && item.linkText && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm md:text-base font-medium text-accent-light dark:text-accent-dark hover:underline focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#161617] rounded-sm transition-colors"
                  >
                    <span>→ {item.linkText[language]}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

