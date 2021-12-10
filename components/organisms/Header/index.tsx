import React from 'react';
import useThemeToggle from '../../../hooks/useThemeToggle';

import styles from './Header.module.scss';

export default function Main() {
  const { toggleActiveTheme } = useThemeToggle();

  return (
    <header className={styles.header}>
      <div>Where in the world?</div>
      <div onClick={toggleActiveTheme}>Dark Mode</div>
    </header>
  );
}
