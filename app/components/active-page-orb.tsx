'use client';

interface ActivePageOrbProps {
  className?: string;
}

export function ActivePageOrb({ className = '' }: ActivePageOrbProps) {
  return (
    <div 
      className={`relative inline-block ml-5 ${className}`}
      aria-hidden="true"
    >
      {/* Main orb - solid color, no animation */}
      <div className="w-2 h-2 rounded-full bg-accent-light dark:bg-accent-dark" />
      
      {/* Subtle inner glow */}
      <div className="absolute inset-0 w-2 h-2 rounded-full bg-accent-light/30 dark:bg-accent-dark/30 blur-sm animate-orb-breathe" />
      
      {/* Gentle outer glow */}
      <div 
        className="absolute -inset-0.5 w-3 h-3 rounded-full bg-accent-light/20 dark:bg-accent-dark/20 blur-md animate-orb-breathe" 
        style={{ animationDelay: '0.5s' }}
      />
    </div>
  );
}
