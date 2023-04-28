// wave.tsx
import React from 'react';
import Aqua from '../components/Aqua';
import Head from 'next/head';
import styles from '../styles/Aqua.module.css';
import handleWaveShareClick from '../utils/handleWaveShareClick';
import { useRouter } from 'next/router';

const Wave = () => {
  const router = useRouter();

  const goToIndex = () => {
    router.push('/');
  };

  const goToWave = () => {
    router.push('/wave');
  };

  return (
    <div className={styles.container}>
      {/* Add the share button emoji here */}
      <button
        className={`${styles.shareButton} ${styles.heartButton}`}
        onClick={goToIndex}
        title="Go to Index"
      >
        💖
      </button>
      <button
        className={`${styles.shareButton} ${styles.rocketButton}`}
        onClick={handleWaveShareClick}
        title="Share"
      >
        🚀
      </button>
      <Head>
        <link rel="shortcut icon" href="/wavicon.ico" />
      </Head>
      <Aqua />
      <div className={styles.label}>Ride the Wave</div>
    </div>
  );
};

export default Wave;
