export const NIGHT_MODE_THEME = 'BLACK-THEME';

export interface SettingsState {
    theme: string;
    autoNightMode: boolean | null;
    nightTheme: string;
  }

  export interface State {
    settings: SettingsState;
  }