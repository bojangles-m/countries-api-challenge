import React from 'react';
// import cn from 'classnames';
// import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { Country } from '../../../useCases/fetchAllCountries';

import styles from './Card.module.scss';

export type Props = {
  country: Country;
};

const Card = ({ country }: Props): JSX.Element => {
  return (
    <a href={`/${country.name.common}`} className={styles.card}>
      <div>
        <Image
          src={country.flags.svg}
          height={350}
          width={600}
          layout="intrinsic"
          alt={country.name.common}
        />
      </div>
      <div className={styles.content}>
        <h4>{country.name.common}</h4>
        <ul>
          <li>
            <strong>Population:</strong>{' '}
            {Intl.NumberFormat().format(country.population)}
          </li>
          <li>
            <strong>Region:</strong> {country.region}
          </li>
          <li>
            <strong>Capital:</strong> {country.capital[0]}
          </li>
        </ul>
      </div>
    </a>
  );
};

export default Card;
