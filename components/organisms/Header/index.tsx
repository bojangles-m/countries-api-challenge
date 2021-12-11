import React from 'react';
import Button, { ButtonType } from '../../atoms/Button';
import useThemeToggle from '../../../hooks/useThemeToggle';
import { Moon, Sunny } from 'react-ionicons';

import styles from './Header.module.scss';

export default function Main() {
  const { isDarkTheme, toggleActiveTheme } = useThemeToggle();

  const button = (
    <Button
      type={ButtonType.PLAIN}
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
