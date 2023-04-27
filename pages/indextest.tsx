import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import LoveButton from '../components/LoveButton';
import LoveJoystick from '../components/LoveJoystick';
import Head from 'next/head';
import styles from '../styles/Press.module.css';
import handleShareClick from '../utils/handleShareClick';

const Index = () => {
  const [isJoystickMode, setIsJoystickMode] = useState(false);

  const handleToggleModeClick = () => {
    setIsJoystickMode(!isJoystickMode);
  };

  return (
    <div className={styles.container}>
      {/* Add the joystick mode emoji here */}
      <button
        className={`${styles.toggleModeButton} ${
          isJoystickMode ? styles.joystickMode : styles.buttonMode
        }`}
        onClick={handleToggleModeClick}
        title={`Switch to ${isJoystickMode ? 'button' : 'joystick'} mode`}
      >
        {isJoystickMode ? '🕹️' : '💖'}
      </button>
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
      {isJoystickMode ? <LoveJoystick /> : <LoveButton />}
    </div>
  );
};

export default Index;
