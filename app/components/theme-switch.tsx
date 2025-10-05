'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const resolvedTheme = theme === 'system' ? systemTheme : theme;
  const isDark = resolvedTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  if (!mounted) {
    return <div className="w-9 h-9 md:w-[200px] md:h-[30px]" aria-hidden />;
  }

  return (
    <>
      {/* Mobile: compact icon button */}
      <button
        type="button"
        onClick={toggleTheme}
        className="md:hidden p-2 rounded-md border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        aria-label="Toggle theme"
        aria-pressed={isDark}
      >
        {isDark ? (
          <svg
            viewBox="0 0 16 16"
            className="w-[20px] h-[20px] text-accent-light dark:text-accent-dark"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 16 16"
            className="w-[20px] h-[20px] text-accent-light dark:text-accent-dark"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
          </svg>
        )}
      </button>

      {/* Desktop: full toggle with labels */}
      <div className="hidden md:flex items-center gap-3 rounded-md border bg-white dark:bg-background-dark border-gray-200 dark:border-gray-700 p-2">
      {/* Sun icon */}
      <svg
        viewBox="0 0 16 16"
        className="w-[23px] h-[23px] text-accent-light dark:text-accent-dark"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
      </svg>

      {/* Toggle */}
      <label className="relative inline-block">
        <input
          id="color_mode"
          name="color_mode"
          type="checkbox"
          className="peer sr-only"
          checked={isDark}
          onChange={toggleTheme}
          role="switch"
          aria-checked={isDark}
          aria-labelledby="theme-switch-label"
          aria-describedby="theme-switch-desc"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              toggleTheme();
            }
          }}
        />

        {/* Track */}
        <span className="block w-[140px] h-[34px] bg-[#E0E0E0] rounded-[26px] overflow-hidden motion-safe:transition-colors motion-safe:duration-300 peer-checked:bg-[#2a2a2a] border border-black/10 peer-checked:border-white/10 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blue-500" />

        {/* Knob */}
        <span className="pointer-events-none absolute left-[2px] top-[2px] w-[70px] h-[30px] bg-white rounded-[26px] shadow-[0_0_6px_-2px_#111] text-center motion-safe:transition-all motion-safe:duration-300 peer-checked:left-[68px] peer-checked:bg-[#3c3c3c]" />

        {/* Labels (decorative) */}
        <span aria-hidden="true" className="pointer-events-none absolute top-[7px] left-5 text-[12px] font-medium text-[#424242] motion-safe:transition-colors motion-safe:duration-300 peer-checked:text-white">
          Light
        </span>
        <span aria-hidden="true" className="pointer-events-none absolute top-[7px] right-5 text-[12px] font-medium text-[#424242] motion-safe:transition-colors motion-safe:duration-300 peer-checked:text-white">
          Dark
        </span>

        {/* Accessible text and status for screen readers */}
        <span id="theme-switch-label" className="sr-only">Color theme</span>
        <span id="theme-switch-desc" className="sr-only">Switch between light and dark themes</span>
        <span className="sr-only" aria-live="polite" aria-atomic="true">{isDark ? 'Dark theme enabled' : 'Light theme enabled'}</span>
      </label>

      {/* Moon icon */}
      <svg
        viewBox="0 0 16 16"
        className="w-[23px] h-[23px] text-accent-light dark:text-accent-dark"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
      </svg>
      </div>
    </>
  );
}