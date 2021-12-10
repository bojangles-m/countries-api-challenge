import React from 'react';
import Head from 'next/head';
import styles from './Main.module.scss';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function Main({ children }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Where in the World?</title>
        <meta name="description" content="Where in the World?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>{children}</main>
    </div>
  );
}
