import { useEffect } from 'react';

import { useLocalStorage } from '@src/hooks';
import { AppearanceMode } from '@src/types';

export const useAppearance = (defaultMode: AppearanceMode) => {
  const KEY_APPEARANCE = 'mode';
  const preferDarkQuery = '(prefers-color-scheme: dark)';

  const [mode, setMode] = useLocalStorage(KEY_APPEARANCE, defaultMode);

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const handleChange = () => {
      if (mediaQuery.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (mode === 'system' && window.matchMedia(preferDarkQuery).matches) {
      document.documentElement.classList.add('dark');
    } else if (mode === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.removeItem(KEY_APPEARANCE);
    }
  }, [mode]);

  // Cast our array as a `const` instead of typing out all the types...
  // Reference: https://kentcdodds.com/blog/wrapping-react-use-state-with-type-script
  return [mode, setMode] as const;
};
