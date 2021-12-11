import React from 'react';
import type { NextPage } from 'next';
import Layout from '../components/organisms/Layout';
import Grid from '../components/organisms/Grid';
import Card from '../components/molecules/Card';
import {
  fetchAllCountries,
  Countries,
  Country,
} from '../useCases/fetchAllCountries';

const Home: NextPage = () => {
  const [countries, setCountries] = React.useState<Countries | undefined>(
    undefined,
  );

  React.useEffect(() => {
    fetchAllCountries().then(response => setCountries(response));
  }, []);

  return (
    <Layout>
      <Grid>
        {countries
          ? countries?.map((country: Country) => (
              <Card key={country.name.official} country={country} />
            ))
          : 'Loading...'}
      </Grid>
    </Layout>
  );
};

export default Home;
