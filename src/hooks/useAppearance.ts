import { useEffect } from 'react';

import { useLocalStorage } from '@src/hooks';
import { AppearanceMode, SetAppearanceMode } from '@src/types';

export const useAppearance = (defaultMode: AppearanceMode) => {
  const KEY_APPEARANCE = 'mode';
  const preferDarkQuery = '(prefers-color-scheme: dark)';

  const [modeString, setModeString] = useLocalStorage(KEY_APPEARANCE, defaultMode);

  const mode = modeString as AppearanceMode;
  const setMode = setModeString as SetAppearanceMode;

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
    if (mode === AppearanceMode.DARK) {
      document.documentElement.classList.add('dark');
    } else if (mode === AppearanceMode.SYSTEM && window.matchMedia(preferDarkQuery).matches) {
      document.documentElement.classList.add('dark');
    } else if (mode === AppearanceMode.LIGHT) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.removeItem(KEY_APPEARANCE);
    }
  }, [mode]);

  // Explicitly set return types for our hook
  // Reference: https://kentcdodds.com/blog/wrapping-react-use-state-with-type-script
  const returnValue: [AppearanceMode, SetAppearanceMode] = [mode as AppearanceMode, setMode];

  return returnValue;
};
