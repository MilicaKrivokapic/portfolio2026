'use client';

import React from 'react';
import SquareUpRight from '../icons/SquareUpRight';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  as?: 'button' | 'a';
  className?: string;
  shadow?: 'default' | 'soft' | 'strong' | 'none';
} & (
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' })
);

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ children, className = '', variant = 'primary', as = 'button', shadow = 'default', ...props }, ref) => {
    const variantClasses = {
      secondary: "group relative no-underline text-white bg-gradient-to-r from-accent-light to-purple-600 dark:from-accent-dark dark:to-accent-light font-semibold transition-all duration-300 ease-out hover:shadow-lg hover:shadow-accent-light/25 dark:hover:shadow-accent-dark/25 ",
      primary: "border border-amber-50 dark:border-accent-light dark:border-neutral-700 text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-black active:bg-gray-100 dark:active:bg-neutral-800 dark:shadow-xl"
    };
    
    const baseClasses = `block text-center px-6 py-2 rounded-2xl transition-all duration-200 ease-in-out hover:scale-[0.97] shadow ${variantClasses[variant]}`;
    
    const disabledClasses = (as === 'button' && (props as any).disabled)
      ? "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white dark:disabled:hover:bg-neutral-900"
      : "";

    const combinedClasses = `${baseClasses} ${disabledClasses} ${className}`.trim();

    const preset = {
      default: { baseRadius: 12, baseOpacity: 0.7, hoverRadius: 9, hoverOpacity: 0.4 },
      soft:    { baseRadius: 8,  baseOpacity: 0.45, hoverRadius: 6, hoverOpacity: 0.3 },
      strong:  { baseRadius: 16, baseOpacity: 0.9,  hoverRadius: 9, hoverOpacity: 0.6 },
      none:    { baseRadius: 0,  baseOpacity: 0,    hoverRadius: 0,  hoverOpacity: 0 }
    }[shadow];

    const baseShadowValue = `0 0 ${preset.baseRadius}px rgba(var(--accent-shadow), ${preset.baseOpacity})`;
    const hoverShadowValue = `0 0 ${preset.hoverRadius}px rgba(var(--accent-shadow), ${preset.hoverOpacity})`;

    const shadowStyle = {
      '--tw-shadow': baseShadowValue,
      ...(props as any).style,
    } as React.CSSProperties;

    const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.setProperty('--tw-shadow', hoverShadowValue);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.setProperty('--tw-shadow', baseShadowValue);
    };

    const content = variant === 'secondary'
      ? (
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
          <span className="inline-block transform-none scale-100 transition-none">
            <SquareUpRight className="w-5 h-5 pointer-events-none" />
          </span>
        </span>
      ) : (
        <>{children}</>
      );

    if (as === 'a') {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={combinedClasses}
          style={shadowStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClasses}
        style={shadowStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
