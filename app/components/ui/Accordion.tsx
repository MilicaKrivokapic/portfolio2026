'use client';

import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export function Accordion({ children, className }: AccordionProps) {
  return (
    <div className={cn('space-y-4', className)}>
      {children}
    </div>
  );
}

interface AccordionItemProps {
  id: string;
  title: React.ReactNode;
  defaultOpen?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function AccordionItem({ id, title, defaultOpen = false, children, className }: AccordionItemProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  const buttonId = `${id}-trigger`;
  const panelId = `${id}-panel`;

  return (
    <div
      className={cn(
        'relative rounded-2xl border-2 border-accent-light/20 dark:border-accent-dark/20 shadow-sm overflow-hidden',
        className
      )}
    >
      <h3 className="m-0">
        <button
          id={buttonId}
          type="button"
          aria-controls={panelId}
          aria-expanded={isOpen}
          className={cn(
            'w-full text-left flex items-center justify-between gap-3 px-4 md:px-6 py-4 md:py-5',
            'bg-accent-light dark:bg-accent-dark text-white dark:text-black',
            'hover:bg-accent-light/90 dark:hover:bg-[#6f5d3c] transition-colors',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-light dark:focus-visible:ring-amber-700'
          )}
          onClick={() => setIsOpen((o) => !o)}
        >
          <span className="font-semibold text-lg md:text-xl">
            {title}
          </span>
          <FaChevronDown
            className={cn(
              'w-5 h-5 transition-transform duration-300',
              isOpen ? 'rotate-180' : 'rotate-0'
            )}
          />
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={cn(
          'bg-white dark:bg-neutral-900/60',
          'px-4 md:px-6',
          'grid transition-all duration-300 ease-in-out',
          isOpen ? 'grid-rows-[1fr] opacity-100 py-5 md:py-6' : 'grid-rows-[0fr] opacity-0 py-0'
        )}
      >
        <div className="overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Accordion;


