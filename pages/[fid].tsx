import { useRouter } from 'next/router';
import Layout from '../components/organisms/Layout';
import Button from '../components/atoms/Button';

export default function Detail() {
  const router = useRouter();
  console.log(router.query);
  return (
    <Layout>
      <Button to={router.back}>Back</Button>
      <h1>Detail Page</h1>
    </Layout>
  );
}
