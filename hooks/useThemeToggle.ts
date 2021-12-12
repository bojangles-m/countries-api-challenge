import React, { Dispatch, SetStateAction } from 'react';

export enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

export const KEY_ACTIVE_THEME = 'theme';

export const setInitialTheme = `
  function getUserPreference() {
    if(window.localStorage.getItem('${KEY_ACTIVE_THEME}')) {
      return window.localStorage.getItem('${KEY_ACTIVE_THEME}')
    }
    return '${THEME.LIGHT}';
  }
  document.body.dataset.theme = getUserPreference();
`;

const toggleActiveTheme = (
  isDarkThemeActive: boolean | undefined,
  setActiveTheme: Dispatch<SetStateAction<THEME>>,
) => {
  if (isDarkThemeActive === undefined) return;
  isDarkThemeActive ? setActiveTheme(THEME.LIGHT) : setActiveTheme(THEME.DARK);
};

export default function useThemeToggle(theme?: THEME) {
  const [isDarkTheme, setIsDarkTheme] = React.useState<boolean | undefined>(
    theme === undefined ? undefined : theme === THEME.DARK,
  );
  const [activeTheme, setActiveTheme] = React.useState<THEME>(() => {
    if (typeof document !== 'undefined')
      return document.body.dataset.theme as THEME;
    return THEME.LIGHT;
  });

  React.useEffect(() => {
    if (activeTheme) {
      document.body.dataset.theme = activeTheme;
      window.localStorage.setItem(KEY_ACTIVE_THEME, activeTheme);
      setIsDarkTheme(activeTheme === THEME.DARK);
    }
  }, [activeTheme]);

  return {
    isDarkTheme,
    toggleActiveTheme: () => toggleActiveTheme(isDarkTheme, setActiveTheme),
  };
}
