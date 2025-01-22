import Image from 'next/image';
import { socialData } from '../config/mockData';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const iconMap = {
  FaGithub,
  FaLinkedin,
  FaTwitter
};

export default function ProfileSidebar() {
  const getIcon = (iconName: string) => {
    const Icon = iconMap[iconName];
    return Icon ? <Icon className="w-5 h-5" /> : null;
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-[400px] bg-surface-light dark:bg-surface-dark border-r border-gray-200 dark:border-gray-800 p-8 flex flex-col">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-40 h-40 rounded-full overflow-hidden">
          <Image
            src="/images/profile.jpg"
            alt="Profile picture"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-2xl font-bold">Your Name</h1>
        <p className="text-muted-light dark:text-muted-dark text-center">
          Accessibility Engineer & Web Developer
        </p>
      </div>

      <nav className="mt-12">
        <ul className="space-y-4">
          <li>
            <a href="#about" className="text-lg hover:text-accent-light dark:hover:text-accent-dark transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="text-lg hover:text-accent-light dark:hover:text-accent-dark transition-colors">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="text-lg hover:text-accent-light dark:hover:text-accent-dark transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-lg hover:text-accent-light dark:hover:text-accent-dark transition-colors">
              Contact
            </a>
          </li>
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
  );
}
