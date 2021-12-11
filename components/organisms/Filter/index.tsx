import React, { ChangeEvent } from 'react';
// import cn from 'classnames';
import Image from 'next/image';

import styles from './Filter.module.scss';

type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Filter = ({ onChange }: Props): JSX.Element => {
  return (
    <div className={styles.filter}>
      <div className={styles.search}>
        <input onChange={onChange} type="text" className="input" />
      </div>
      {/* <div>ddd</div> */}
    </div>
  );
};

export default Filter;
