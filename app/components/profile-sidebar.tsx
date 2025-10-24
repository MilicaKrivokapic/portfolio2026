'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// removed social icons and blog link
import { useLanguage } from '../context/language-context';
import { useActiveSection } from '../hooks/useActiveSection';
import { HomeIcon } from './icons/menu-icon-home';
import FaceSmile from './icons/FaceSmile';
import FolderOpen from './icons/FolderOpen';
import Pencil from './icons/Pencil';
import { ActivePageOrb } from './active-page-orb';

// social icons moved to footer

export default function ProfileSidebar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isBlogPage = pathname.startsWith('/blog');
  const isAboutPage = pathname === '/about';
  const isContactPage = pathname === '/contact';
  const isProjectsPage = pathname.startsWith('/projects');
  const sectionIds: string[] = []; // Remove projects from sections since it's now a page
  const intersectionActiveSection = useActiveSection(sectionIds);
  
  // Only use intersection active section if we're not on the blog page
  const activeSection = isBlogPage ? '' : intersectionActiveSection;

  

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    // Since we no longer have section navigation for projects, this function is simplified
    // It can be removed entirely if no sections are used
    if (!isHome || sectionIds.length === 0) {
      // Don't prevent default - allow normal navigation
      return;
    }
    
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    {
      id: 'home',
      label: t('sidebar.home'),
      href: '/'
    },
    {
      id: 'about',
      label: t('about.title'),
      href: '/about'
    },
    {
      id: 'projects',
      label: t('sidebar.projects'),
      href: '/projects'
    },
    {
      id: 'blog',
      label: t('sidebar.blog'),
      href: '/blog'
    }
  ];

  return (
    <>
      {/* Profile Card (not fixed, not sticky, just below the top bar) */}
  <div className="hidden mt-0 p-4 bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-zinc-800">
        <div className="flex items-center space-x-4">
          <Link 
            href="/" 
            aria-label="Go to home" 
            className="w-20 h-20 rounded-full overflow-hidden p-[3px] border-4 border-accent-light dark:border-accent-dark bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#1B3157]"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image
                src="/aaaa_koiru_portfolio.png"
                alt="Profile picture of Milica Krivokapic, a cartoon dog"
                width={80}
                height={80}
                className="object-cover"
                priority
              />
            </div>
          </Link>
          <div>
            <Link href="/" className="text-lg font-bold hover:text-accent-light dark:hover:text-accent-dark transition-colors" aria-label="Go to home">Milica Krivokapic</Link>
            <p className="text-sm text-muted-light dark:text-muted-dark">
              {t('sidebar.role')}
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Primary Navigation */}
      <nav aria-label="Primary" className="hidden lg:flex lg:flex-col
              lg:basis-[280px] lg:shrink-0
              lg:sticky lg:top-[var(--header-h)]
              lg:overflow-y-auto
              mt-28
              p-8 bg-surface-light bg-gradient-to-b from-white to-[#fcf9f7] dark:bg-gradient-to-b dark:from-[#161617] dark:to-[#0F0F10] rounded-3xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.3)]
              2xl:ml-40">
        <div className="flex flex-col items-center space-y-3x">
          <Link href="/" aria-label="Go to home" className="relative w-32 h-32 rounded-2xl overflow-hidden bg-gradient-to-br bg-black flex items-center justify-center">
            <div className="w-full h-full overflow-hidden flex items-center justify-center">
              {/* Light mode image */}
              <Image
                src="/testing.png"
                alt="Profile picture"
                width={120}
                height={120}
                className="object-cover dark:hidden"
                priority
              />
              {/* Dark mode image */}
              <Image
                src="/testing-dark.png"
                alt="Profile picture"
                width={120}
                height={120}
                className="object-cover hidden dark:block"
                priority
              />
            </div>
          </Link>
          <Link href="/" className="text-xl font-bold mt-1 hover:text-accent-light dark:hover:text-accent-dark transition-colors text-center" aria-label="Go to home">MILICA KRIVOKAPIC</Link>
          <p className="text-muted-light dark:text-muted-dark text-center text-sm">
            {t('sidebar.role')}
          </p>
        </div>

        <div className="mt-8 z-50">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={(e) => (sectionIds.includes(item.id)) ? handleNavClick(e, item.id) : undefined}
                  className={`group relative block px-4 py-2.5 text-sm font-medium no-underline
                           text-primary-light dark:text-primary-dark
                           bg-transparent 
                           border border-gray-300/80 dark:border-zinc-600/70
                           rounded-xl transition-all duration-300 ease-out
                           hover:bg-surface-light/80 dark:hover:bg-surface-dark/80
                           hover:border-accent-light/40 dark:hover:border-accent-dark/40
                           hover:shadow-lg hover:shadow-accent-light/15 dark:hover:shadow-accent-dark/15
                           hover:-translate-y-1 hover:scale-[1.02]
                           focus-visible:bg-surface-light/80 dark:focus-visible:bg-surface-dark/80
                           focus-visible:border-accent-light/50 dark:focus-visible:border-accent-dark/50
                           active:translate-y-0 active:scale-[0.98]
                           ${(item.id === 'blog' && isBlogPage) || 
                             (item.id === 'home' && isHome) ||
                             (item.id === 'about' && isAboutPage) ||
                             (item.id === 'projects' && isProjectsPage) ||
                             (sectionIds.includes(item.id) && activeSection === item.id) ? 
                             'bg-surface-light/40 dark:bg-surface-dark/40 border-accent-light/50 dark:border-accent-dark/50 text-accent-light dark:text-accent-dark' : 
                             ''
                           }`}
                >
                  <span className="relative z-10 transition-colors duration-300 flex items-center gap-2.5
                                 group-hover:text-accent-light dark:group-hover:text-accent-dark">
                    {item.id === 'home' && <HomeIcon />}
                    {item.id === 'about' && <FaceSmile />}
                    {item.id === 'projects' && <FolderOpen />}
                    {item.id === 'blog' && <Pencil />}
                    {item.label}
                    {((item.id === 'blog' && isBlogPage) || 
                      (item.id === 'home' && isHome) ||
                      (item.id === 'about' && isAboutPage) ||
                      (item.id === 'projects' && isProjectsPage) ||
                      (sectionIds.includes(item.id) && activeSection === item.id)) && (
                      <ActivePageOrb />
                    )}
                  </span>
                  {/* Subtle background glow effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 
                                bg-gradient-to-r from-accent-light/8 to-transparent 
                                dark:from-accent-dark/8 dark:to-transparent
                                transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Separated Contact Section - like "Hire Me" in reference */}
        <div className="pt-6">
          <div className="mb-3">
           
          </div>
          <Link
  href="/contact"
  className={`group relative block w-full px-6 py-3 text-center font-semibold no-underline
    text-white bg-gradient-to-r from-accent-light to-purple-600 dark:from-accent-dark dark:to-accent-light
    rounded-2xl transition-all duration-300 ease-out
    hover:shadow-lg hover:shadow-accent-light/25 dark:hover:shadow-accent-dark/25
    hover:-translate-y-1 hover:scale-[1.02]
    active:translate-y-0 active:scale-[0.98]
    ${isContactPage ? 'ring-2 ring-accent-light/50 dark:ring-accent-dark/50' : ''}`}
>
  <span className="relative z-10 flex items-center justify-center gap-2">
    {t('sidebar.contact')}
    <span className="inline-block transform-none scale-100 transition-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
        className="w-5 h-5 pointer-events-none"
        fill="currentColor"
      >
        <path d="M480 96C515.3 96 544 124.7 544 160L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 160C96 124.7 124.7 96 160 96L480 96zM264 224C254.3 224 245.5 229.8 241.8 238.8C238.1 247.8 240.1 258.1 247 265L282 300L215 367C205.6 376.4 205.6 391.6 215 400.9L239 424.9C248.4 434.3 263.6 434.3 272.9 424.9L339.9 357.9L374.9 392.9C381.8 399.8 392.1 401.8 401.1 398.1C410.1 394.4 416 385.7 416 376L416 248C416 234.7 405.3 224 392 224L264 224z"/>
      </svg>
    </span>
  </span>
</Link>
        </div>
      </nav>
    </>
  );
}
