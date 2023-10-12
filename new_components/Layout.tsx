// Layout.tsx
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import handleShareClick from '../utils/handleShareClick';
import styles from '../styles/Press.module.css';
import { ButtonConfig, generateButtons } from './ButtonMap';

interface LayoutProps {
  buttonKeys: string[];  // Use keys instead of full button configs
  mainContent: React.ReactNode;
  faviconUrl: string;
}

const Layout: React.FC<LayoutProps> = ({ buttonKeys, mainContent, faviconUrl }) => {
  const router = useRouter();
  const buttonsToRender = generateButtons(buttonKeys);  // Get button configs based on keys

  return (
    <div className={styles.container}>
      <div className={styles.buttonsContainer}>
        {buttonsToRender.map((button, index) => (
          <button
            key={index}
            className={`${styles.shareButton} ${button.className}`}
            onClick={() => router.push(button.route)}
            title={button.title}
          >
            {button.content}
          </button>
        ))}
        <button
          className={`${styles.shareButton} ${styles.rocketButton}`}
          onClick={handleShareClick}
          title="Share"
        >
          🚀
        </button>
      </div>
      <Head>
        <link rel="shortcut icon" href={faviconUrl} />
      </Head>
      {mainContent}
    </div>
  );
};

export default Layout;
