// wave.tsx
import React from 'react';
import Dopamine from '../components/Dopamine';
import Head from 'next/head';
import styles from '../styles/Dope.module.css';
import handleDopeShareClick from '../utils/handleDopeShareClick';
import { useRouter } from 'next/router';

const Dope = () => {
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

  return (
    <div className={styles.container}>
      {/* Add the share button emoji here */}
      <button
        className={`${styles.shareButton} ${styles.growButton}`}
        onClick={goToGrow}
        title="Go to Grow"
      >
        🪷
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
        onClick={handleDopeShareClick}
        title="Share"
      >
        🚀
      </button>
      <Head>
        <link rel="shortcut icon" href="/candicon.ico" />
      </Head>
      <Dopamine />
      <div className={styles.label}>Try Some Dope</div>
    </div>
  );
};

export default Dope;
