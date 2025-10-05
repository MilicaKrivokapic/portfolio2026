
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/language-context';
import { GBFlag } from './icons/gb-flag';
import { FIFlag } from './icons/fi-flag';

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const [menuWidth, setMenuWidth] = useState<number | null>(null);

  const openMenu = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpen(true);
  };

  const scheduleCloseMenu = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
    }
    closeTimer.current = window.setTimeout(() => setOpen(false), 180);
  };

  useEffect(() => {
    const updateWidth = () => {
      if (triggerRef.current) {
        setMenuWidth(triggerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [language]);

  const other = language === 'en' ? 'fi' : 'en';
  const CurrentFlag = language === 'en' ? GBFlag : FIFlag;
  const OtherFlag = other === 'en' ? GBFlag : FIFlag;

  return (
    <div className="relative">
      {/* Mobile: simple toggle */}
      <button
        type="button"
        onClick={() => setLanguage(other)}
        className="md:hidden p-2 rounded-md bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all"
        aria-label={`Switch language to ${other === 'en' ? 'English' : 'Finnish'}`}
      >
        <div className="flex items-center gap-2">
          <CurrentFlag />
          <span className="text-sm font-medium">{language.toUpperCase()}</span>
        </div>
      </button>

      {/* Desktop: hover/focus dropdown */}
      <div className="hidden md:inline-block relative">
        <button
          type="button"
          aria-haspopup="menu"
          aria-expanded={open}
          className="p-2 h-[50px] rounded-md bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all flex items-center"
          onMouseEnter={openMenu}
          onMouseLeave={scheduleCloseMenu}
          onFocus={openMenu}
          onBlur={scheduleCloseMenu}
          ref={triggerRef}
        >
          <div className="flex items-center gap-2">
            <CurrentFlag />
            <span className="text-sm font-medium">{language.toUpperCase()}</span>
          </div>
        </button>

        <div
          role="menu"
          aria-label="Select language"
          className={`absolute left-0 top-full mt-1 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-900 shadow-lg ring-1 ring-black/5 z-[200] transition ease-out duration-150 ${open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-1'}`}
          style={{ width: menuWidth ? `${menuWidth}px` : undefined }}
          onMouseEnter={openMenu}
          onMouseLeave={scheduleCloseMenu}
          onFocus={openMenu}
          onBlur={scheduleCloseMenu}
        >
          <button
            role="menuitemradio"
            aria-checked={false}
            onClick={() => setLanguage(other)}
            className="w-full text-left px-2 py-2 text-sm hover:bg-gray-100 dark:hover:bg-neutral-800 flex items-center gap-2 rounded-md"
          >
            <OtherFlag />
            <span className="font-medium">{other.toUpperCase()}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
