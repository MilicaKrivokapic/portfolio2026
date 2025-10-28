'use client';

import React from 'react';
import SquareCaretDown from '../icons/SquareCaretDown';

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
        'relative rounded-2xl border-2 border-accent-light/20 dark:border-accent-dark/20 shadow-sm bg-gradient-to-br from-accent-light/5 to-accent-light/10 dark:from-accent-dark/5 dark:to-accent-dark/10',
        className
      )}
    >
      <div className="absolute top-0 left-0 right-0 h-2 md:h-3 bg-accent-light dark:bg-accent-dark rounded-t-2xl" />

      <h3 className="m-0">
        <button
          id={buttonId}
          type="button"
          aria-controls={panelId}
          aria-expanded={isOpen}
          className={cn(
            'w-full text-left flex items-center justify-between gap-3 px-4 md:px-6 pt-4 md:pt-5 pb-3 md:pb-4',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-light dark:focus-visible:ring-accent-dark rounded-2xl'
          )}
          onClick={() => setIsOpen((o) => !o)}
        >
          <span className="font-semibold text-lg md:text-xl text-neutral-900 dark:text-neutral-100">
            {title}
          </span>
          <SquareCaretDown
            className={cn(
              'w-6 h-6 transition-transform duration-300 text-neutral-700 dark:text-neutral-200',
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
          'px-4 md:px-6 pb-5 md:pb-6',
          'grid transition-all duration-300 ease-in-out',
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
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


