import React from 'react';

import styles from './Grid.module.scss';

type Props = {
  children: React.ReactNode;
};

export default function Grid({ children }: Props) {
  return <div className={styles.grid}>{children}</div>;
}
