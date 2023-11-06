// Layout.tsx
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import handleShareClick from '../utils/handleShareClick';
import styles from '../styles/Press.module.css';
import { buttonConfigs, generateButtons } from './ButtonMap';

interface LayoutProps {
  buttonKeys: string[];  // Use keys instead of full button configs
  mainContent: React.ReactNode;
  faviconUrl: string;
  currButton: string;
}

const FlyLayout: React.FC<LayoutProps> = ({ buttonKeys, mainContent, faviconUrl, currButton }) => {
  const router = useRouter();
  const buttonsToRender = generateButtons(buttonKeys);  // Get button configs based on keys
  const selectedButton = buttonConfigs[currButton];
  const selectedContainer = selectedButton.container ? styles[`${selectedButton.container}`] : styles.container

  return (
    <div>
      <div className={styles.buttonsContainer}>
        {buttonsToRender.map((button, index) => (
          <button
            key={index}
            className={`${styles.shareButton}`}
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
      <div className="semi-transparent-image" style={{ background: "url('/fliesbg.png') no-repeat center center fixed;", backgroundSize: "cover" }}>
        <div className={selectedContainer}>
          {mainContent}
        </div>
      </div>
    </div>
  );
};

export default FlyLayout;
