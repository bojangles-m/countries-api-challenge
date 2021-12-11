import React from 'react';
import cn from 'classnames';
import Button, { ButtonType } from '../../atoms/Button';
import useThemeToggle from '../../../hooks/useThemeToggle';
import { Moon, Sunny } from 'react-ionicons';

import styles from './Header.module.scss';

export default function Main() {
  const { isDarkTheme, toggleActiveTheme } = useThemeToggle();

  const Icon = isDarkTheme ? (
    <Sunny cssClasses={cn('icon', styles.icon)} />
  ) : (
    <Moon cssClasses={cn('icon', styles.icon)} width="19px" height="19px" />
  );

  return (
    <header className={styles.header}>
      <h1>Where in the world?</h1>
      {isDarkTheme !== undefined && (
        <Button
          type={ButtonType.PLAIN}
          onClick={toggleActiveTheme}
          customClass={styles.button}>
          {Icon}
          <span className={styles.button_text}>
            {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
          </span>
        </Button>
      )}
    </header>
  );
}
