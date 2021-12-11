import React from 'react';
import cn from 'classnames';
import Header from '../Header';

import styles from './Layout.module.scss';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main className={cn(styles.main)}>
      <Header />
      <div className={styles.content}>{children}</div>
    </main>
  );
}
