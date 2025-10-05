"use client";

import Link from 'next/link';
import { socialData } from '../config/mockData';
import { FaGithub, FaLinkedin, FaPenNib } from 'react-icons/fa6';
import { TbMailFilled } from 'react-icons/tb';
import { IconType } from 'react-icons';

const iconMap: Record<string, IconType> = {
  FaGithub,
  FaLinkedin,
  TbMailFilled,
  FaPenNib
};

type SocialLinksProps = {
  className?: string;
  includeBlog?: boolean;
};

export default function SocialLinks({ className = '', includeBlog = false }: SocialLinksProps) {
  const getIcon = (iconName: string) => {
    const Icon = iconMap[iconName];
    return Icon ? <Icon size={20} /> : null;
  };

  return (
    <div className={`flex justify-center space-x-4 ${className}`}>
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
      {includeBlog && (
        <Link
          href="/blog"
          className="p-2 hover:text-accent-light dark:hover:text-accent-dark transition-colors"
          aria-label="Blog"
        >
          <FaPenNib size={20} />
        </Link>
      )}
    </div>
  );
}


