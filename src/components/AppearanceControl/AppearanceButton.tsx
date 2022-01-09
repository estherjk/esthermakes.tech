import { useEffect, useState } from 'react';

import { AppearanceListGroup } from '@src/components/AppearanceControl';
import { appearanceControls } from '@src/data';
import { useAppearance } from '@src/hooks';
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

  useEffect(() => {
    setIcon(appearanceControls[mode].icon);
  }, [mode]);

  return (
    <div className="relative">
      <button
        type="button"
        id="appearanceButton"
        data-toggle="appearanceDropdown"
        className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800"
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
