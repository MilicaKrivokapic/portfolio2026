'use client';

import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";

const navItems = {
  "/blog": { name: "Blog" },
  "/projects": { name: "Projects" },
  "/photos": { name: "Photos" },
};

export function Navbar() {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-400px)] bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10">
      <nav className="px-6 py-4 flex justify-end items-center max-w-4xl mx-auto">
        <ThemeSwitch />
      </nav>
    </header>
  );
}
