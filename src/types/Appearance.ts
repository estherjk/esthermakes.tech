export enum AppearanceMode {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
}

export type Appearance = {
  icon: string;
};

export type AppearanceControls = { [key in AppearanceMode]: Appearance };

export type SetAppearanceMode = React.Dispatch<React.SetStateAction<AppearanceMode>>;
