"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { ThemeSwitch } from "./theme-switch";
import { LanguageSwitch } from "./language-switch";
import { useLanguage } from "../context/language-context";
import Link from "next/link";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  // Track if component is mounted (client-side)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-[100] md:justify-end">
      <nav aria-label="Utility" className="relative px-6 py-4 flex justify-between md:justify-end items-center gap-4">
        {/* Hamburger icon for mobile that transforms to X (when menu closed) */}
        {!menuOpen && (
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-[999999] relative"
            aria-label="Open menu"
            aria-expanded={false}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <div className="relative w-6 h-4 flex justify-center items-center">
              <span className="absolute w-6 h-0.5 bg-gray-800 dark:bg-gray-100 transition-all duration-300 -translate-y-2"></span>
              <span className="absolute w-6 h-0.5 bg-gray-800 dark:bg-gray-100 transition-all duration-300"></span>
              <span className="absolute w-6 h-0.5 bg-gray-800 dark:bg-gray-100 transition-all duration-300 translate-y-2"></span>
            </div>
          </button>
        )}

        {/* Desktop Navigation - Language and Theme Switches */}
        <div className="hidden md:flex gap-5 z-[110]">
          <LanguageSwitch />
          <ThemeSwitch />
        </div>
       </nav>

       {/* Mobile menu rendered via portal to document.body */}
       {mounted && createPortal(
         <>
         {/* Close button (X) when menu is open */}
         {menuOpen && (
           <button
             className="md:hidden fixed top-4 left-6 flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-[999999] bg-white/90 dark:bg-gray-800/90 rounded-full"
             aria-label="Close menu"
             aria-expanded={true}
             aria-controls="mobile-menu"
             onClick={() => setMenuOpen(false)}
           >
             <div className="relative w-6 h-4 flex justify-center items-center">
               <span className="absolute w-6 h-0.5 bg-gray-800 dark:bg-gray-100 transition-all duration-300 rotate-45"></span>
               <span className="absolute w-6 h-0.5 bg-gray-800 dark:bg-gray-100 transition-all duration-300 opacity-0"></span>
               <span className="absolute w-6 h-0.5 bg-gray-800 dark:bg-gray-100 transition-all duration-300 -rotate-45"></span>
             </div>
           </button>
         )}

         {/* Mobile menu backdrop */}
         <div 
           className={`md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 z-[9800] ${
             menuOpen 
               ? 'opacity-100 visible' 
               : 'opacity-0 invisible pointer-events-none'
           }`}
           onClick={() => setMenuOpen(false)}
           aria-hidden="true"
         />

           {/* Mobile slide-in menu */}
           <div 
           id="mobile-menu"
           className={`md:hidden fixed top-0 left-0 right-0 h-auto bg-background-light dark:bg-background-dark border-b border-gray-200/50 dark:border-white/10 shadow-2xl transition-transform duration-300 ease-out z-[99999] ${
             menuOpen 
               ? 'translate-y-0' 
               : '-translate-y-full'
           }`}
           aria-hidden={!menuOpen}
         >
           {/* Menu content container */}
           <div className="flex flex-col">
             {/* Top spacing for hamburger - much more space */}
             <div className="h-16" />
             
             {/* Navigation links */}
             <div className="px-6 py-4">
               <div className="flex flex-col gap-6">
                 <Link
                   href="/"
                   className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-accent-light dark:hover:text-accent-dark transition-colors py-2"
                   onClick={() => setMenuOpen(false)}
                 >
                   {t('nav.home')}
                 </Link>
                 <Link
                   href="/about"
                   className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-accent-light dark:hover:text-accent-dark transition-colors py-2"
                   onClick={() => setMenuOpen(false)}
                 >
                   {t('about.title')}
                 </Link>
                 <Link
                   href="/projects"
                   className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-accent-light dark:hover:text-accent-dark transition-colors py-2"
                   onClick={() => setMenuOpen(false)}
                 >
                   {t('nav.projects')}
                 </Link>
                 <Link
                   href="/blog"
                   className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-accent-light dark:hover:text-accent-dark transition-colors py-2"
                   onClick={() => setMenuOpen(false)}
                 >
                   {t('nav.blog')}
                 </Link>
               </div>
             </div>

             {/* Bottom section with contact button and controls */}  
             <div className="px-6 pb-8 space-y-6 mt-8">
               {/* Contact button */}
               <Link
                 href="/contact"
                 className="block w-full text-center"
                 onClick={() => setMenuOpen(false)}
               >
                 <span className="inline-block w-full px-6 py-3 rounded-xl bg-gradient-to-r from-accent-light to-purple-600 dark:from-accent-dark dark:to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-accent-light/25 dark:hover:shadow-accent-dark/25 transition-all duration-300">
                   {t('sidebar.contact')}
                 </span>
               </Link>
               
               {/* Theme and Language switches */}
               <div className="flex justify-center gap-4 pt-4 border-t border-gray-200/50 dark:border-white/10">
                 <LanguageSwitch />
                 <ThemeSwitch />
               </div>
             </div>
           </div>
         </div>
         </>,
         document.body
       )}
    </header>
  );
}
