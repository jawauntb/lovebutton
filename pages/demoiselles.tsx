// index.tsx
import React from 'react';
import Avignon from '../components/Avignon';
import Head from 'next/head';
import styles from "../styles/Demoiselles.module.css";
import handleOgreShareClick from '../utils/handleOgreShareClick';
import { useRouter } from 'next/router';

const Index = () => {
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

  // const goToDope = () => {
  //   router.push('/dope');
  // };

  const goToDems = () => {
    router.push('/demoiselles');
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
        onClick={handleOgreShareClick}
        title="Share"
      >
        🚀
      </button>
      <Head>
        <link rel="shortcut icon" href="/ogricon.ico" />
      </Head>
      <Avignon />
    </div>
  );
};

export default Index;
