/**
 * Combines multiple class names, filtering out falsy values
 */
export function cx(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}