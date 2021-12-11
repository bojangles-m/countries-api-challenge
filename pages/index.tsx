import React, { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';
import type { NextPage } from 'next';
import Layout from '../components/organisms/Layout';
import Grid from '../components/organisms/Grid';
import Card from '../components/molecules/Card';
import Filter from '../components/organisms/Filter';
import { Countries, Country } from '../useCases/fetchAllCountries';
import { fetchCountriesByName } from '../useCases/fetchCountriesByName';
import useDataProvider from '../lib/DataProvider';

const printCards = (countries?: Countries) => {
  if (!countries) return 'Loading...';
  if (Array.isArray(countries) && countries.length === 0)
    return 'No countries found!';

  return countries?.map((country: Country) => (
    <Card key={country.name} country={country} />
  ));
};

const Home: NextPage = () => {
  const { allCountries } = useDataProvider();
  const [countries, setCountries] = useState<Countries | undefined>(undefined);

  useEffect(() => {
    setCountries(allCountries);
  }, [allCountries]);

  const changeHandler = (key: string) => {
    if (!!key) {
      fetchCountriesByName(key).then((response: Countries) => {
        setCountries(response);
      });
      return;
    }

    setCountries(allCountries);
  };

  const debouncedChangeHandler = debounce(changeHandler, 1000);

  return (
    <Layout>
      <Filter onChange={(key: string) => debouncedChangeHandler(key)} />
      <Grid>{printCards(countries)}</Grid>
    </Layout>
  );
};

export default Home;
