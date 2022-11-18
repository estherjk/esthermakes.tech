import { useEffect, useState } from 'react';

import { AppearanceListGroup } from '@src/components/AppearanceControl';
import { appearanceControls } from '@src/data';
import { useAppearance, useOutsideClick } from '@src/hooks';
import { AppearanceMode } from '@src/types';

export const AppearanceButton = () => {
  const [mode, setMode] = useAppearance(AppearanceMode.SYSTEM);
  const [showListGroup, setShowListGroup] = useState(false);
  const [icon, setIcon] = useState('');

  const onClick = () => {
    setShowListGroup(!showListGroup);
  };

  const onModeSelected = (mode: AppearanceMode) => {
    setMode(mode);
    setShowListGroup(false);
  };

  const ref = useOutsideClick(() => {
    setShowListGroup(false);
  });

  // Update icon when system appearance changes
  // NOTE: Feels a bit like DRY here... (see `useAppearance`)
  useEffect(() => {
    if (mode !== AppearanceMode.SYSTEM) return;

    const preferDarkQuery = '(prefers-color-scheme: dark)';
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const handleChange = () => {
      if (mediaQuery.matches) {
        setIcon(appearanceControls[AppearanceMode.DARK].icon);
      } else {
        setIcon(appearanceControls[AppearanceMode.LIGHT].icon);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mode]);

  useEffect(() => {
    if (mode === AppearanceMode.SYSTEM) {
      const preferDarkQuery = '(prefers-color-scheme: dark)';
      const mediaQuery = window.matchMedia(preferDarkQuery);
      if (mediaQuery.matches) {
        setIcon(appearanceControls[AppearanceMode.DARK].icon);
      } else {
        setIcon(appearanceControls[AppearanceMode.LIGHT].icon);
      }
    } else {
      setIcon(appearanceControls[mode].icon);
    }
  }, [mode]);

  return (
    <div className="relative">
      <button
        type="button"
        id="appearanceButton"
        aria-label="Appearance button"
        data-toggle="appearanceDropdown"
        className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800"
        ref={ref}
        onClick={onClick}>
        <i className={icon} />
      </button>

      <div
        id="appearanceDropdown"
        aria-labelledby="appearanceButton"
        className={`absolute top-full right-0 w-36 mt-2 z-50 ${
          showListGroup ? 'visible' : 'hidden'
        }`}>
        <AppearanceListGroup mode={mode} onModeSelected={onModeSelected} />
      </div>
    </div>
  );
};
