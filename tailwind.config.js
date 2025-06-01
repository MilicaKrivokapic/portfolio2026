/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-syne)', 'sans-serif'],
      },
      colors: {
        'background-light': '#FFFFFF',
        'background-dark': '#121212',
        'surface-light': '#F7F7F7',
        'surface-dark': '#1E1E1E',
        'primary-light': '#333333',
        'primary-dark': '#D4D4D4',
        'muted-light': '#666666',
        'muted-dark': '#A0A0A0',
        accent: {
          light: '#33B1D7FF',
          dark: '#F93A6AFF',
        }
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
