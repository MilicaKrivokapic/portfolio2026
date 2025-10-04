'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { socialData } from '../config/mockData';
import { FaGithub, FaLinkedin, FaPenNib } from 'react-icons/fa6';
import { TbMailFilled } from 'react-icons/tb';
import { IconType } from 'react-icons';
import { useLanguage } from '../context/language-context';
import { useActiveSection } from '../hooks/useActiveSection';
import { HomeIcon } from './icons/menu-icon-home';
import FaceSmile from './icons/FaceSmile';
import FolderOpen from './icons/FolderOpen';
import Pencil from './icons/Pencil';

const iconMap: Record<string, IconType> = {
  FaGithub,
  FaLinkedin,
  TbMailFilled,
  FaPenNib
};

export default function ProfileSidebar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isBlogPage = pathname.startsWith('/blog');
  const isAboutPage = pathname === '/about';
  const sectionIds = ['projects'];
  const intersectionActiveSection = useActiveSection(sectionIds);
  
  // Only use intersection active section if we're not on the blog page
  const activeSection = isBlogPage ? '' : intersectionActiveSection;

  const getIcon = (iconName: string) => {
    const Icon = iconMap[iconName];
    return Icon ? <Icon size={20} /> : null;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (!isHome) {
      // Don't prevent default if we're navigating to home page
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
    ...sectionIds.map((item) => ({
      id: item,
      label: t(`sidebar.${item}`),
      href: isHome ? `#${item}` : `/#${item}`
    })),
    {
      id: 'blog',
      label: t('sidebar.blog'),
      href: '/blog'
    }
  ];

  return (
    <>
      {/* Profile Card (not fixed, not sticky, just below the top bar) */}
  <div className="md:hidden mt-0 p-4 bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-zinc-800">
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

      {/* Desktop Sidebar */}
  <aside className="hidden md:flex fixed left-0 top-0 h-screen w-[280px] bg-surface-light dark:bg-surface-dark border-r border-gray-200 dark:border-zinc-800 p-6 flex-col">
        <div className="flex flex-col items-center space-y-3">
          <Link href="/" aria-label="Go to home" className="relative w-32 h-32 rounded-2xl overflow-hidden p-[2px] border-2 border-accent-light dark:border-accent-dark bg-gradient-to-br bg-black flex items-center justify-center">
            <div className="w-full h-full overflow-hidden flex items-center justify-center">
              <Image
                src="/aaaa_koiru_portfolio.png"
                alt="Profile picture"
                width={120}
                height={120}
                className="object-cover"
                priority
              />
            </div>
          </Link>
          <Link href="/" className="text-xl font-bold mt-1 hover:text-accent-light dark:hover:text-accent-dark transition-colors text-center" aria-label="Go to home">MILICA KRIVOKAPIC</Link>
          <p className="text-muted-light dark:text-muted-dark text-center text-sm">
            {t('sidebar.role')}
          </p>
        </div>

        <nav className="mt-8 z-50">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={(e) => (item.id !== 'blog' && item.id !== 'home' && item.id !== 'about') ? handleNavClick(e, item.id) : undefined}
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
                             (item.id !== 'blog' && item.id !== 'home' && item.id !== 'about' && activeSection === item.id) ? 
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
        </nav>

        <div className="mt-auto">
          <div className="flex justify-center space-x-4">
            {socialData.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                aria-label={link.name}
              >
                {getIcon(link.icon)}
              </a>
            ))}
            <Link
              href="/blog"
              className="p-2 hover:text-accent-light dark:hover:text-accent-dark transition-colors"
              aria-label="Blog"
            >
              <FaPenNib size={20} />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
