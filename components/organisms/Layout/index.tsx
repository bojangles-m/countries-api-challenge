import React from 'react';
import cn from 'classnames';
import Header from '../Header';

import styles from './Layout.module.scss';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: Props) {
  return (
    <main className={cn(styles.main)}>
      <Header />
      {children}
    </main>
  );
}
