import { AppearanceControls, AppearanceMode } from '@src/types';

// Reference: https://stackoverflow.com/a/57312014
export const appearanceControls: AppearanceControls = {
  [AppearanceMode.LIGHT]: {
    icon: 'fa-regular fa-sun-bright',
  },
  [AppearanceMode.DARK]: {
    icon: 'fa-regular fa-moon',
  },
  [AppearanceMode.SYSTEM]: {
    icon: 'fa-regular fa-display',
  },
};
