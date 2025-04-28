'use client';

import { ThemeSwitch } from "./theme-switch";
import { LanguageSwitch } from "./language-switch";

export function Navbar() {
  return (
    <header className="sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10">
      <nav className="px-6 py-4 flex justify-end items-center gap-4">
        <LanguageSwitch />
        <ThemeSwitch />
      </nav>
    </header>
  );
}
