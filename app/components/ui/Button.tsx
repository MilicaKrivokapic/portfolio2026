import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary';
  as?: 'button' | 'a';
  className?: string;
} & (
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' })
);

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ children, className = '', variant = 'primary', as = 'button', ...props }, ref) => {
    const baseClasses = "px-6 py-2 rounded-lg bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-100 dark:hover:bg-neutral-900 active:bg-gray-200 dark:active:bg-neutral-900 transition-all duration-200 ease-in-out hover:bg-stone-50 hover:scale-[0.97] shadow-accent-light/40 dark:shadow-accent-dark shadow-[0_0_12px_rgba(255,51,102,0.4)] hover:shadow-[0_0_8px_rgba(255,51,102,0.4)] dark:hover:shadow-[0_0_8px_rgba(249,58,106,0.6)] focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark focus:ring-offset-2";
    
    const disabledClasses = (as === 'button' && (props as any).disabled)
      ? "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white dark:disabled:hover:bg-neutral-900 disabled:hover:shadow-[0_0_12px_rgba(255,51,102,0.4)]"
      : "";

    const combinedClasses = `${baseClasses} ${disabledClasses} ${className}`.trim();

    if (as === 'a') {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={combinedClasses}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClasses}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
