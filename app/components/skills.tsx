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
    <div className="space-y-12">
      <h2 className="text-3xl font-bold relative inline-block">
        {t('skills.title')}
        <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent-light dark:bg-accent-dark rounded-full" />
      </h2>
      <div className="grid grid-cols-1 gap-16">
        {skillsData.map((skill, index) => {
          const Icon = iconMap[skill.icon as keyof typeof iconMap];
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={skill.name[language]}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 [margin-left:-1px]">
                {Icon && (
                  <div className="p-2 rounded-lg bg-accent-light/10 dark:bg-accent-dark/10">
                    <Icon className="w-6 h-6 text-accent-light dark:text-accent-dark" />
                  </div>
                )}
                <h3 className="text-xl font-semibold">{skill.name[language]}</h3>
              </div>
              <div className="relative pl-4">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 border-l-2 border-accent-light/50 dark:border-accent-dark/50" />
                <p className="text-muted-light dark:text-muted-dark leading-relaxed max-w-prose">
                  {skill.description[language]}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
