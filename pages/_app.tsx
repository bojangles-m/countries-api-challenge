import '../styles/globals.scss';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { DataProvider } from '../lib/DataProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Where in the World?</title>
        <meta name="description" content="Where in the World?" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
    </>
  );
}

export default MyApp;
