import React from 'react';
import { ifTest } from '../../../utils/ifTest';

import styles from './Grid.module.scss';

type Props = {
  children: React.ReactNode;
};

export default function Grid({ children }: Props) {
  return (
    <div className={styles.grid} data-testid={ifTest('grid')}>
      {children}
    </div>
  );
}
