import { useRouter } from 'next/router';
import MainLayout from '../components/layouts/Main';
import Button from '../components/atoms/Button';

export default function Detail() {
  const router = useRouter();
  console.log(router.query);
  return (
    <MainLayout>
      <Button to={router.back}>Back</Button>
      <h1>Detail Page</h1>
    </MainLayout>
  );
}
