/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-bricolage)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['var(--font-syne)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      // Theme color cheat sheet (where each is used):
      // - background-light: base page background in light mode (applied on <body> via bg-background-light)
      //   Used in: app/layout.tsx <body className="bg-background-light dark:bg-background-dark"> and many overlays
      // - surface-light: card/surface backgrounds in light mode (e.g., sidebars, cards, panels)
      //   Used in: profile sidebar <aside className="bg-surface-light dark:bg-surface-dark">,

      //           cards like contact, presentation, recommendations, blog/audit article wrappers
      // - primary-light: default text color in light mode
      //   Used in: app/layout.tsx <body className="text-primary-light dark:text-primary-dark">
     
      // - muted-light / muted-dark: secondary/subtle text
      
      // - accent.light / accent.dark: interactive emphasis
      //   Used in: link and button hover/focus (hover:text-accent-*, focus borders),
      //            selection color in global.css, icons (ThemeSwitch), active states in sidebar links
      colors: {
        // Page background (light). Example: <body className="bg-background-light ...">
        'background-light': '#FCF9F7',
        // Dark page background (charcoal)
        'background-dark': '#0F0F10',
        // Surfaces/cards (light). Example: sidebars, cards: bg-surface-light
        'surface-light': '#FCF9F7',
        // Dark surfaces/cards
        'surface-dark': '#151517',
        // Primary text (light). Example: <body className="text-primary-light ...">
        'primary-light': '#2d162c',
        'primary-dark': '#E7E7E7',
        'muted-light': '#4a2480',
        'muted-dark': '#9A9AA0',
        // Accent colors for emphasis, borders, icons, hovers, selection
        accent: {
          // Light-mode accent. Used by: hover:text-accent-light, border-accent-light, selection, icons
          light: '#4a2480',
          // Dark-mode accent approximating reference glow
          dark: '#C9A86C',
        }
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
