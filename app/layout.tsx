'use client';

import "./global.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "./components/nav";
import ProfileSidebar from './components/profile-sidebar';
import { LanguageProvider } from './context/language-context';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            try {
              if (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
            } catch (e) {}`
        }} />
      </head>
      <body className="antialiased bg-background-light dark:bg-background-dark min-h-screen text-primary-light dark:text-primary-dark font-sans">
        <ThemeProvider>
          <LanguageProvider>
            <div className="flex min-h-screen">
              <ProfileSidebar />
              <div className="flex-1 md:ml-[400px]">
                <div className="md:hidden h-20"></div> {/* Spacer for mobile card */}
                <Navbar />
                <main className="px-4 md:px-20 py-8 md:py-20 max-w-4xl">
                  {children}
                </main>
              </div>
            </div>
            <Analytics />
            <SpeedInsights />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
