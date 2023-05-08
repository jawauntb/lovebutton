// Dope.tsx
import React from 'react';
import Dopamine from '../components/Dopamine';
import Head from 'next/head';
import styles from '../styles/Dope.module.css';


const Dope = () => {


  return (
    <div className={styles.container}>
      {/* Add a container with a higher z-index for the buttons */}

      <Head>
        <link rel="shortcut icon" href="/candicon.ico" />
      </Head>
      <Dopamine />
    </div>
  );
};

export default Dope;