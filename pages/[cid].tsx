import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/organisms/Layout';
import Button from '../components/atoms/Button';
import { fetchCountry } from '../useCases/fetchCountry';
import { Country } from '../useCases/types';
import { ArrowBackOutline } from 'react-ionicons';

export default function Detail() {
  const router = useRouter();
  const [country, setCountry] = React.useState<Country | undefined>(undefined);

  React.useEffect(() => {
    if (router?.query?.cid) {
      const countryName = router.query.cid as string;
      fetchCountry(countryName).then(response => setCountry(response));
    }
  }, [router]);

  return (
    <Layout>
      <Button to={router.back} Icon={ArrowBackOutline}>
        Back
      </Button>
      <h1>Detail Page</h1>
    </Layout>
  );
}
