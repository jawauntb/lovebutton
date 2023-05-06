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

  const goToDope = () => {
    router.push('/dope');
  };

  const goToDems = () => {
    router.push('/demoiselles');
  };

  return (
    <div className={styles.container}>
      {/* Add the share button emoji here */}
      <button
        className={`${styles.shareButton} ${styles.dopeButton}`}
        onClick={goToDems}
        title="Go to Demoiselles"
      >
        👹
      </button>
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
        title="Go to Love"
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