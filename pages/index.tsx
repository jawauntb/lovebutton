// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import LoveButton from '../components/LoveButton';
import Head from 'next/head';
import styles from '../styles/Press.module.css';
import handleShareClick from '../utils/handleShareClick';

const Index = () => {
  return (
    <div className={styles.container}>
      {/* Add the share button emoji here */}
      <button
        className={styles.shareButton}
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

export default Index