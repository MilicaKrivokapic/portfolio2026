'use client';
import React from 'react';
import { skillsData } from '../config/mockData';
import { useLanguage } from '../context/language-context';
import { motion } from 'framer-motion';
import UniversalAccess from './icons/UniversalAccess';
import Code from './icons/Code';
import PenRuler from './icons/PenRuler';
import Compass from './icons/Compass';

const iconMap = {
  UniversalAccess,
  Code,
  PenRuler,
  Compass
};

export default function Skills() {
  const { t, language } = useLanguage();
  
  return (
    <div className="space-y-8 md:space-y-12">
      <h2 className="text-2xl md:text-3xl font-bold relative inline-block">
        {t('skills.title')}
        <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent-light dark:bg-accent-dark rounded-full" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {skillsData.map((skill, index) => {
          const Icon = iconMap[skill.icon as keyof typeof iconMap];
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={skill.name[language]}
              className="group relative rounded-xl md:rounded-2xl bg-white dark:bg-[#1a1a1b] p-4 md:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.3)] ring-1 ring-black/5 dark:ring-white/5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-4">
                {Icon && (
                  <div className="flex-shrink-0 p-2.5 md:p-3 rounded-lg md:rounded-xl bg-accent-light/10 dark:bg-accent-dark/10 group-hover:bg-accent-light/15 dark:group-hover:bg-accent-dark/15 transition-colors duration-300 w-fit">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-accent-light dark:text-accent-dark" />
                  </div>
                )}
                <div className="flex-1 space-y-2 md:space-y-3 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold text-foreground-light dark:text-foreground-dark leading-snug">
                    {skill.name[language]}
                  </h3>
                  <p className="text-sm md:text-sm text-muted-light dark:text-muted-dark leading-relaxed">
                    {skill.description[language]}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
