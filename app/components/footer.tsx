'use client';

import React from "react";
import SocialLinks from "./social-links";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-32 pb-16">
      <hr className="w-full border-1 border-gray-200 dark:border-zinc-800 mb-8" />
      <div className="flex flex-col items-center gap-4">
        <SocialLinks />
        <div>© {YEAR}</div>
      </div>
    </footer>
  );
}
