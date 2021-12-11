import React, { ChangeEvent } from 'react';
import debounce from 'lodash/debounce';
import type { NextPage } from 'next';
import Layout from '../components/organisms/Layout';
import Grid from '../components/organisms/Grid';
import Card from '../components/molecules/Card';
import {
  fetchAllCountries,
  Countries,
  Country,
} from '../useCases/fetchAllCountries';
import { fetchCountriesByName } from '../useCases/fetchCountriesByName';

const Home: NextPage = () => {
  const [countries, setCountries] = React.useState<Countries | undefined>(
    undefined,
  );

  React.useEffect(() => {
    fetchAllCountries().then(response => setCountries(response));
  }, []);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const countryName = event.target.value;
    if (!!countryName)
      fetchCountriesByName(countryName).then((response: Countries) =>
        setCountries(response),
      );
  };

  const debouncedChangeHandler = debounce(changeHandler, 1000);

  return (
    <Layout>
      <input onChange={debouncedChangeHandler} type="text" />

      <Grid>
        {countries
          ? countries?.map((country: Country) => (
              <Card key={country.name} country={country} />
            ))
          : 'Loading...'}
      </Grid>
    </Layout>
  );
};

export default Home;
