'use client';

import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { LanguageSwitch } from "./language-switch";
import { useLanguage } from "../context/language-context";

const navItems = {
  "/blog": { name: "Blog" },
  "/projects": { name: "Projects" },
  "/photos": { name: "Photos" },
};

export function Navbar() {
  const { t } = useLanguage();
  
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-400px)] bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10">
      <nav className="px-6 py-4 flex justify-end items-center gap-4 max-w-4xl mx-auto">
        <LanguageSwitch />
        <ThemeSwitch />
      </nav>
    </header>
  );
}
