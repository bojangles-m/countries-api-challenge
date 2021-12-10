import React from 'react';
import useDarkMode from '../../../hooks/useDarkMode';

import styles from './Header.module.scss';

// type Props = {
//   onClick?: () => void;
// };

export default function Main() {
  const { toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <div>Where in the world?</div>
      <div onClick={toggleDarkMode}>Dark Mode</div>
    </header>
  );
}
