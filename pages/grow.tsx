// grow.tsx
import React from 'react';
import Flower from '../components/Flower';
import Head from 'next/head';
import styles from '../styles/Growth.module.css';
import handleGrowShareClick from '../utils/handleGrowShareClick';
import { useRouter } from 'next/router';

const Grow = () => {
  const router = useRouter();

  const goToWave = () => {
    router.push('/wave');
  };

  const goToIndex = () => {
    router.push('/')
  }

  const goToGrow = () => {
    router.push('/grow')
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
        className={`${styles.shareButton} ${styles.heartButton}`}
        onClick={goToIndex}
        title="Go to Index"
      >
        💖
      </button>
      <button
        className={`${styles.shareButton} ${styles.rocketButton}`}
        onClick={handleGrowShareClick}
        title="Share"
      >
        🚀
      </button>
      <Head>
        <link rel="shortcut icon" href="/flowicon.ico" />
      </Head>
      <Flower />
    </div>
  );
};

export default Grow;