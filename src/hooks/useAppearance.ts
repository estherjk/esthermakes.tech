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
    updateClassList(mode);
  }, [mode, setModeString]);

  const updateClassList = (mode: AppearanceMode) => {
    switch (mode) {
      case AppearanceMode.DARK:
        document.documentElement.classList.add('dark');
        break;
      case AppearanceMode.LIGHT:
        document.documentElement.classList.remove('dark');
        break;
      case AppearanceMode.SYSTEM:
        if (window.matchMedia(preferDarkQuery).matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        break;
    }
  };

  // Explicitly set return types for our hook
  // Reference: https://kentcdodds.com/blog/wrapping-react-use-state-with-type-script
  const returnValue: [AppearanceMode, SetAppearanceMode] = [mode, setMode];

  return returnValue;
};
