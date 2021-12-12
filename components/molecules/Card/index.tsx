import React from 'react';
import Image from 'next/image';
import { Country } from '../../../useCases/fetchAllCountries';
import { ifTest } from '../../../utils/ifTest';

import styles from './Card.module.scss';

export type Props = {
  country: Country;
};

const Card = ({ country }: Props): JSX.Element => {
  return (
    <a
      href={`/${country.name}`}
      className={styles.card}
      data-testid={ifTest('card')}>
      <div>
        <Image
          src={country.flag}
          height={400}
          width={600}
          layout="intrinsic"
          alt={country.name}
        />
      </div>
      <div className={styles.content}>
        <h4>{country.name}</h4>
        <ul>
          <li>
            <strong>Population:</strong>{' '}
            {Intl.NumberFormat().format(country.population)}
          </li>
          <li>
            <strong>Region:</strong> {country.region}
          </li>
          <li>
            <strong>Capital:</strong> {country.capital}
          </li>
        </ul>
      </div>
    </a>
  );
};

export default Card;
