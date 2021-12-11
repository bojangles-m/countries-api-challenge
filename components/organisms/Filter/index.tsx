import React, { ChangeEvent } from 'react';
import cn from 'classnames';
import { SearchOutline } from 'react-ionicons';

import styles from './Filter.module.scss';

type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Filter = ({ onChange }: Props): JSX.Element => {
  return (
    <div className={styles.filter}>
      <div className={styles.search}>
        <SearchOutline cssClasses={cn('icon', styles.icon)} />
        <input
          onChange={onChange}
          type="text"
          className="input"
          placeholder="Search for a country ..."
        />
      </div>
    </div>
  );
};

export default Filter;
