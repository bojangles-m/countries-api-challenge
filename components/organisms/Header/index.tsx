import React from 'react';
import Button, { ButtonType } from '../../atoms/Button';
import useThemeToggle from '../../../hooks/useThemeToggle';

import styles from './Header.module.scss';

export default function Main() {
  const { isDarkTheme, toggleActiveTheme } = useThemeToggle();

  return (
    <header className={styles.header}>
      <h1>Where in the world?</h1>
      <Button
        type={ButtonType.PLAIN}
        onClick={toggleActiveTheme}
        customClass={styles.button}>
        {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
      </Button>
    </header>
  );
}
