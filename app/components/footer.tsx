'use client';

import React from "react";
import { useLanguage } from '../context/language-context';

const YEAR = new Date().getFullYear();

export default function Footer() {
  const { language } = useLanguage();

  const links = {
    en: [
      { label: 'Email', href: 'mailto:milica.portfolio@proton.me' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/milica-krivokapic/', external: true },
      { label: 'Meet', href: 'https://cal.com/milica-krivokapic', external: true },
      { label: 'GitHub', href: 'https://github.com/MilicaKrivokapic', external: true },
      { label: 'Contact Form', href: '/contact' },
    ],
    fi: [
      { label: 'Sähköposti', href: 'mailto:milica.portfolio@proton.me' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/milica-krivokapic/', external: true },
      { label: 'Tapaaminen', href: 'https://cal.com/milica-krivokapic', external: true },
      { label: 'GitHub', href: 'https://github.com/MilicaKrivokapic', external: true },
      { label: 'Yhteydenottolomake', href: '/contact' },
    ],
  };

  const currentLinks = links[language];

  return (
    <footer className="mt-24 pb-12">
      <hr className="w-full border-1 border-gray-200 dark:border-zinc-800 mb-8" />
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
        {/* Footer Links - Stacked on left */}
        <nav aria-label="Footer navigation" className="md:order-1">
          <ul className="flex flex-col gap-2 text-sm md:text-base">
            {currentLinks.map((link, index) => (
              <li key={index} className="relative">
                <a
                  href={link.href}
                  {...(link.external && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                  className="group inline-block text-gray-600 dark:text-muted-dark hover:text-accent-light dark:hover:text-accent-light md:hover:translate-x-2 transition-all duration-200 font-medium relative"
                >
                  {/* Orb that appears on hover */}
                  <span className="hidden md:block absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent-light dark:bg-accent-dark opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Copyright - Right side on desktop */}
        <div className="text-xs md:text-sm text-muted-light dark:text-muted-dark md:order-2 md:text-right">
          © {YEAR} Milica Krivokapic
        </div>
      </div>
    </footer>
  );
}
