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
  const { t } = useLanguage();
  
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">{t('skills.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((skill) => {
          const Icon = iconMap[skill.icon];
          return (
            <div key={skill.name} className="p-4 bg-surface-light dark:bg-surface-dark rounded-lg">
              <div className="flex items-center gap-3">
                {Icon && <Icon className="w-5 h-5 text-accent-light dark:text-accent-dark" />}
                <span className="font-medium">{skill.name}</span>
              </div>
              <div className="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-accent-light dark:bg-accent-dark rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
