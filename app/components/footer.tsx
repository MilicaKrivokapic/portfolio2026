'use client';

import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaRss,
  FaLinkedinIn,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { socialLinks } from "app/config";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }: { href: string, icon: React.ElementType }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} />
      <a href="/rss.xml" target="_self">
        <FaRss />
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-32 pb-16">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="grid grid-cols-3 gap-4">
        <div>
          © {YEAR}
        </div>
        <div />
        <SocialLinks />
      </div>
    </footer>
  );
}
