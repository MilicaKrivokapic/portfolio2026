'use client';
import React from 'react';
import { socialLinks } from '../config';
import { socialData } from '../config/mockData';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const iconMap = {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope
};

export default function Contact() {
  const getIcon = (iconName: string) => {
    const Icon = iconMap[iconName];
    return Icon ? <Icon className="w-6 h-6" /> : null;
  };

  return (
    <section className="py-12">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark bg-clip-text text-transparent mb-8">
        Get in Touch
      </h2>
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4 text-primary-light dark:text-primary-dark">
              Let's Connect
            </h3>
            <div className="flex gap-4">
              {socialData.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background-light dark:bg-background-dark rounded-full hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                >
                  {getIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
          <form className="flex-1 space-y-4">
            <input
              type="text"
              placeholder="Milica Krivokapic"
              className="w-full p-3 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark outline-none transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark outline-none transition-all"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark outline-none transition-all"
            />
            <button
              type="submit"
              className="w-full bg-primary-light dark:bg-primary-dark text-white py-3 px-6 rounded-lg hover:bg-accent-light dark:hover:bg-accent-dark transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="space-y-8 mt-8">
          <p className="text-lg text-muted-light dark:text-muted-dark">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          <a 
            href={socialLinks.email}
            className="inline-block px-6 py-3 bg-accent-light dark:bg-accent-dark text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Send me an email
          </a>
        </div>
      </div>
    </section>
  );
}
