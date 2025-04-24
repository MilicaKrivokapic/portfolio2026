'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { socialData } from '../config/mockData';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { useLanguage } from '../context/language-context';
import { useActiveSection } from '../hooks/useActiveSection';

interface IconMap {
  [key: string]: IconType;
}

const iconMap: IconMap = {
  FaGithub,
  FaLinkedin
};

export default function ProfileSidebar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === '/';
  const sectionIds = ['about', 'experience', 'projects', 'recommendations', 'contact'];
  const activeSection = useActiveSection(sectionIds);

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

  const navItems = sectionIds.map((item) => ({
    id: item,
    label: t(`sidebar.${item}`),
    href: isHome ? `#${item}` : `/#${item}`
  }));

  return (
    <>
      {/* Mobile Card */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 p-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
            <Image
              src="https://picsum.photos/400"
              alt="Profile picture"
              width={48}
              height={48}
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="text-lg font-bold">Milica Krivokapic</h1>
            <p className="text-sm text-muted-light dark:text-muted-dark">
              {t('sidebar.role')}
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-[400px] bg-surface-light dark:bg-surface-dark border-r border-gray-200 dark:border-gray-800 p-8 flex-col">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-40 h-40 rounded-full overflow-hidden bg-gray-200">
            <Image
              src="https://picsum.photos/400"
              alt="Profile picture"
              width={160}
              height={160}
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-2xl font-bold">MILICA KRIVOKAPIC</h1>
          <p className="text-muted-light dark:text-muted-dark text-center">
            {t('sidebar.role')}
          </p>
        </div>

        <nav className="mt-12">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`text-lg block relative py-1
                    after:content-[''] after:absolute after:left-0 after:bottom-0 after:right-0 
                    after:h-[2px] after:bg-accent-light dark:after:bg-accent-dark
                    after:origin-left after:transition-transform after:duration-300
                    ${activeSection === item.id ? 
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
          </div>
        </div>
      </aside>
    </>
  );
}
