import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '../components/organisms/Layout';
import Button from '../components/atoms/Button';
import { fetchCountry } from '../useCases/fetchCountry';
import { Country } from '../useCases/types';
import { ArrowBackOutline } from 'react-ionicons';
import useDataProvider, { Status } from '../lib/DataProvider';
import styles from './Detail.module.scss';

export default function Detail() {
  const { status, mappedCountries } = useDataProvider();
  const router = useRouter();
  const [country, setCountry] = React.useState<Country | undefined>(undefined);

  React.useEffect(() => {
    if (router?.query?.cid) {
      const countryName = router.query.cid as string;
      fetchCountry(countryName).then(response => setCountry(response));
    }
  }, [router]);

  const doBorderCountriesExist =
    country && Array.isArray(country.borders) && country.borders.length > 0;
  const borderCountries =
    status === Status.LOADING ? (
      'Loading...'
    ) : doBorderCountriesExist ? (
      <div className={styles['border-countries']}>
        {country.borders.map(borderCountry => (
          <Button
            key={mappedCountries.get(borderCountry)}
            to={`/${mappedCountries.get(borderCountry)}`}>
            {mappedCountries.get(borderCountry)}
          </Button>
        ))}
      </div>
    ) : (
      <span className={styles['border-countries__none']}>
        Has no border Countries
      </span>
    );

  return (
    <Layout>
      <Button to="/" Icon={ArrowBackOutline} customClass={styles.button}>
        Back
      </Button>
      {country && (
        <article className={styles.article}>
          <div className={styles.image}>
            <Image
              src={country.flag}
              height={500}
              width={800}
              layout="intrinsic"
              alt={country.name}
            />
          </div>
          <div className={styles.wrapper}>
            <h2>{country.name}</h2>
            <div className={styles.content}>
              <section className={styles.section}>
                <ul>
                  <li>
                    <strong>Native Name:</strong> {country.nativeName}
                  </li>
                  <li>
                    <strong>Population:</strong>{' '}
                    {Intl.NumberFormat().format(country.population)}
                  </li>
                  <li>
                    <strong>Region:</strong> {country.region}
                  </li>
                  <li>
                    <strong>Sub Region:</strong> {country.subregion}
                  </li>
                  <li>
                    <strong>Capital:</strong> {country.capital}
                  </li>
                </ul>
              </section>
              <section className={styles.section}>
                <ul>
                  <li>
                    <strong>Top Level Domain:</strong> {country.topLevelDomain}
                  </li>
                  <li>
                    <strong>Currencies:</strong> {country.currencies}
                  </li>
                  <li>
                    <strong>Languages:</strong>{' '}
                    {country.languages.map(lang => lang.name).join(', ')}
                  </li>
                </ul>
              </section>
              <section className={styles.section}>
                <span className={styles['border-countries__title']}>
                  Border Countries:
                </span>
                {borderCountries}
              </section>
            </div>
          </div>
        </article>
      )}
    </Layout>
  );
}
