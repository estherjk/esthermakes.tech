import { AppearanceControls, AppearanceMode } from '@src/types';

// Reference: https://stackoverflow.com/a/57312014
export const appearanceControls: AppearanceControls = {
  [AppearanceMode.LIGHT]: {
    icon: 'far fa-sun',
  },
  [AppearanceMode.DARK]: {
    icon: 'far fa-moon',
  },
  [AppearanceMode.SYSTEM]: {
    icon: 'fas fa-desktop',
  },
};
