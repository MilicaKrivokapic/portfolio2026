'use client';
import React from 'react';
import { skillsData } from '../config/mockData';
import { FaUniversalAccess, FaKeyboard, FaHeadphones, FaPalette, FaPencilRuler, FaCode } from 'react-icons/fa';

const iconMap = {
  FaUniversalAccess,
  FaKeyboard,
  FaHeadphones,
  FaPalette,
  FaPencilRuler,
  FaCode
};

export default function Skills() {
  const getIcon = (iconName: string) => {
    const Icon = iconMap[iconName];
    return Icon ? (
      <Icon className="w-12 h-12 text-primary-light dark:text-primary-dark group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors" />
    ) : null;
  };

  return (
    <section className="py-12">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark bg-clip-text text-transparent mb-8">
        Accessibility Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skillsData.map((skill) => (
          <div
            key={skill.name}
            className="group p-6 bg-surface-light dark:bg-surface-dark rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex flex-col items-center space-y-4">
              {getIcon(skill.icon)}
              <h3 className="text-lg font-medium">{skill.name}</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-primary-light dark:bg-primary-dark h-2.5 rounded-full transition-all duration-500 ease-out group-hover:bg-accent-light dark:group-hover:bg-accent-dark"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
