'use client';

import React from "react";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-32 pb-16">
  <hr className="w-full border-1 border-gray-200 dark:border-zinc-800 mb-8" />
      <div className="flex justify-center">
        <div>
          © {YEAR}
        </div>
      </div>
    </footer>
  );
}
