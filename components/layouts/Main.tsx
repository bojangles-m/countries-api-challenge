import React from 'react';
import cn from 'classnames';
import Header from '../organisms/Header';

import styles from './Main.module.scss';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function Main({ children }: Props) {
  return (
    <main className={cn(styles.main)}>
      <Header />
      {children}
    </main>
  );
}
