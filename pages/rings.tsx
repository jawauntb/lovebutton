// rings.tsx
import React from 'react';
import Resonance from '../components/Resonance';
import Head from 'next/head';
import styles from "../styles/Resonance.module.css";
import handleRingShareClick from '../utils/handleRingShareClick';
import { useRouter } from 'next/router';

const Rings = () => {
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
        className={`${styles.shareButton} ${styles.heartButton}`}
        onClick={goToIndex}
        title="Go to Love"
      >
        💖
      </button>
      <button
        className={`${styles.shareButton} ${styles.rocketButton}`}
        onClick={handleRingShareClick}
        title="Share"
      >
        🚀
      </button>
      <Head>
        <link rel="shortcut icon" href="/resicon.ico" />
      </Head>
      <Resonance />
    </div>
  );
};

export default Rings;
