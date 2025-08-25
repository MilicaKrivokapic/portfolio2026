'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const resolvedTheme = theme === 'system' ? systemTheme : theme;

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return <div className="w-9 h-9"></div>; // Placeholder to prevent layout shift
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-md border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all group focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark"
      aria-label="Toggle theme"
      style={{ minWidth: '36px', minHeight: '36px' }}
    >
      {resolvedTheme === 'dark' ? (
        <FiSun className="w-5 h-5 md:w-4 md:h-4 text-white/80 group-hover:text-white transition-colors" />
      ) : (
        <FiMoon className="w-5 h-5 md:w-4 md:h-4 text-black/80 group-hover:text-black transition-colors" />
      )}
    </button>
  );
}