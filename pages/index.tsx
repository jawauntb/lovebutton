// index.tsx
import React from 'react';
import LoveButton from '../components/LoveButton';
import Head from 'next/head';
import styles from '../styles/Press.module.css';
import handleShareClick from '../utils/handleShareClick';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

  const goToWave = () => {
    router.push('/wave');
  };

  const goToIndex = () => {
    router.push('/')
  }

  return (
    <div className={styles.container}>
      {/* Add the share button emoji here */}
      <button
        className={`${styles.shareButton} ${styles.waveButton}`}
        onClick={goToWave}
        title="Go to Wave"
      >
        🌊
      </button>
      <button
        className={`${styles.shareButton} ${styles.rocketButton}`}
        onClick={handleShareClick}
        title="Share"
      >
        🚀
      </button>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <LoveButton />
    </div>
  );
};

export default Index;
