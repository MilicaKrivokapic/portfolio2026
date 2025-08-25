"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ThemeSwitch } from "./theme-switch";
import { LanguageSwitch } from "./language-switch";
import Link from "next/link";
import { NAV_ITEMS } from "../../lib/nav";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-[100] md:justify-end">
      <nav className="px-6 py-4 flex justify-between md:justify-end items-center gap-4">
        {/* Hamburger icon for mobile that transforms to X */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-[110]"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <div className="relative w-6 h-4 flex justify-center items-center">
            <span className={`absolute w-6 h-0.5 bg-gray-800 dark:bg-gray-100 transition-all duration-100 ${
              menuOpen ? 'rotate-45' : '-translate-y-2'
            }`}></span>
            <span className={`absolute w-6 h-0.5 bg-gray-800 dark:bg-gray-100 transition-all duration-100 ${
              menuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`absolute w-6 h-0.5 bg-gray-800 dark:bg-gray-100 transition-all duration-100 ${
              menuOpen ? '-rotate-45' : 'translate-y-2'
            }`}></span>
          </div>
        </button>
        {/* Language and Theme Switches (always visible) */}
        <div className="flex gap-4 z-[110]">
          <LanguageSwitch />
          <ThemeSwitch />
        </div>
      </nav>
      {/* Mobile menu overlay */}
      <div 
        id="mobile-menu"
        className={`fixed top-0 left-0 w-full h-[50vh] bg-background-light dark:bg-background-dark z-[100] flex flex-col items-center pt-16 shadow-lg transition-all animate-fade-in-down md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6 mt-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={{ pathname: "/", hash: item.id }}
              className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-accent-light dark:hover:text-accent-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/blog"
            className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-accent-light dark:hover:text-accent-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
        </div>
      </div>
    </header>
  );
}
