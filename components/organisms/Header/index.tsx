import React from 'react';
import Button, { ButtonType } from '../../atoms/Button';
import useThemeToggle from '../../../hooks/useThemeToggle';

import styles from './Header.module.scss';

export default function Main() {
  const { isDarkTheme, toggleActiveTheme } = useThemeToggle();

  return (
    <header className={styles.header}>
      <div>Where in the world?</div>
      <Button type={ButtonType.PLAIN} onClick={toggleActiveTheme}>
        {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
      </Button>
    </header>
  );
}
