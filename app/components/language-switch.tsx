
import { useLanguage } from '../context/language-context';
import { GBFlag } from './icons/gb-flag';
import { FIFlag } from './icons/fi-flag';

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => setLanguage(language === 'en' ? 'fi' : 'en')}
      className="p-2 rounded-md border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all group focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500"
      aria-label={`Switch language to ${language === 'en' ? 'Finnish' : 'English'}`}
    >
      <div className="flex items-center gap-2">
        {language === 'en' ? <GBFlag /> : <FIFlag />}
        <span className="text-sm font-medium">
          {language === 'en' ? 'EN' : 'FI'}
        </span>
      </div>
    </button>
  );
}
