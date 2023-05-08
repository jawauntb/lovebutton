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
  const goToGrow = () => {
    router.push('/grow')
  }
  const goToWave = () => {
    router.push('/wave');
  };

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
        className={`${styles.shareButton} ${styles.growButton}`}
        onClick={goToGrow}
        title="Go to Grow"
      >
        🪷
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
        onClick={handleWaveShareClick}
        title="Share"
      >
        🚀
      </button>
      <Head>
        <link rel="shortcut icon" href="/wavicon.ico" />
      </Head>
      <Aqua />
    </div>
  );
};

export default Wave;
