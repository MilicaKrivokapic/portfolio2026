'use client';
import React from 'react';
import { skillsData } from '../config/mockData';
import { FaUniversalAccess, FaKeyboard, FaHeadphones, FaPalette, FaPencilRuler, FaCode } from 'react-icons/fa';
import { useLanguage } from '../context/language-context';

const iconMap = {
  FaUniversalAccess,
  FaKeyboard,
  FaHeadphones,
  FaPalette,
  FaPencilRuler,
  FaCode
};

export default function Skills() {
  const { t, language } = useLanguage();
  
  return (
    <div className="space-y-12">
      <h2 className="text-3xl font-bold">{t('skills.title')}</h2>
      <div className="grid grid-cols-1 gap-12">
        {skillsData.map((skill) => {
          const Icon = iconMap[skill.icon as keyof typeof iconMap];
          return (
            <div key={skill.name[language]} className="space-y-4">
              <div className="flex items-center gap-3">
                {Icon && <Icon className="w-6 h-6 text-accent-light dark:text-accent-dark" />}
                <h3 className="text-xl font-semibold">{skill.name[language]}</h3>
              </div>
              <p className="text-muted-light dark:text-muted-dark leading-relaxed max-w-prose">
                {skill.description[language]}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
