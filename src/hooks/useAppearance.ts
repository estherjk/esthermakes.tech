import { useEffect, useState } from 'react';

import { useStorage } from '@src/hooks';
import { AppearanceMode } from '@src/types';

export const useAppearance = (defaultMode: AppearanceMode) => {
  const KEY_APPEARANCE = 'mode';
  const preferDarkQuery = '(prefers-color-scheme: dark)';

  const { getItem, setItem } = useStorage();

  const [mode, _setMode] = useState<AppearanceMode>(() => {
    const value = getItem(KEY_APPEARANCE, 'local');

    if (value) {
      return value as AppearanceMode;
    } else {
      return defaultMode;
    }
  });

  // Perform side effect (i.e. save to localStorage, then set mode)
  const setMode = (mode: AppearanceMode) => {
    setItem(KEY_APPEARANCE, mode, 'local');
    _setMode(mode);
  };

  // Update when system appearance changes
  useEffect(() => {
    if (mode !== AppearanceMode.SYSTEM) return;

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
  }, [mode]);

  useEffect(() => {
    updateClassList(mode);
    setMode(mode);
  }, [mode]);

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
  const returnValue: [AppearanceMode, (mode: AppearanceMode) => void] = [mode, setMode];

  return returnValue;
};
