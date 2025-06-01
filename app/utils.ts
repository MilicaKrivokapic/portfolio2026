export type ClassValue = string | boolean | undefined | null;

/**
 * Utility function to conditionally join class names
 */
export function cx(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}

// Add this type export to make TypeScript happy
export type * from 'next-themes';