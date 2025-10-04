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
  const sectionIds = ['about', 'experience', 'projects', 'recommendations', 'contact'];
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
  <aside className="hidden md:flex fixed left-0 top-0 h-screen w-[400px] bg-surface-light dark:bg-surface-dark border-r border-gray-200 dark:border-zinc-800 p-8 flex-col">
        <div className="flex flex-col items-center space-y-4">
          <Link href="/" aria-label="Go to home" className="relative w-56 h-48 rounded-3xl overflow-hidden p-[3px] border-2 border-accent-light dark:border-accent-dark bg-gradient-to-br bg-black flex items-center justify-center">
            <div className="w-full h-full overflow-hidden flex items-center justify-center">
              <Image
                src="/aaaa_koiru_portfolio.png"
                alt="Profile picture"
                width={192}
                height={192}
                className="object-cover"
                priority
              />
            </div>
          </Link>
          <Link href="/" className="text-2xl font-bold mt-2 hover:text-accent-light dark:hover:text-accent-dark transition-colors" aria-label="Go to home">MILICA KRIVOKAPIC</Link>
          <p className="text-muted-light dark:text-muted-dark text-center">
            {t('sidebar.role')}
          </p>
        </div>

        <nav className="mt-12 z-50">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={(e) => (item.id !== 'blog' && item.id !== 'home') ? handleNavClick(e, item.id) : undefined}
                  className={`text-lg block relative py-1
                    after:content-[''] after:absolute after:left-0 after:bottom-0 after:right-0 
                    after:h-[2px] after:bg-accent-light dark:after:bg-accent-dark
                    after:origin-left after:transition-transform after:duration-300 z-40
                    ${(item.id === 'blog' && isBlogPage) || 
                      (item.id === 'home' && isHome) ||
                      (item.id === 'about' && isAboutPage) ||
                      (item.id !== 'blog' && item.id !== 'home' && item.id !== 'about' && activeSection === item.id) ? 
                      'after:scale-x-100' : 
                      'after:scale-x-0 hover:after:scale-x-100'
                    }
                  `}
                >
                  {item.label}
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
