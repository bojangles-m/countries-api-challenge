import React from 'react';
import Button, { ButtonStyle } from '../../atoms/Button';
import useThemeToggle, { THEME } from '../../../hooks/useThemeToggle';
import { Moon, Sunny } from 'react-ionicons';

import styles from './Header.module.scss';

type Props = {
  theme?: THEME;
};

export default function Header({ theme }: Props) {
  const { isDarkTheme, toggleActiveTheme } = useThemeToggle(theme);

  const button = (
    <Button
      buttonStyle={ButtonStyle.PLAIN}
      onClick={toggleActiveTheme}
      customClass={styles.button}
      Icon={isDarkTheme ? Sunny : Moon}>
      <span className={styles.button_text}>
        {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
      </span>
    </Button>
  );

  return (
    <header className={styles.header}>
      <h1>Where in the world?</h1>
      {isDarkTheme !== undefined && button}
    </header>
  );
}
