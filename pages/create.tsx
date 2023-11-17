// index.tsx
import React from 'react';
import CreatorButton from '../components/CreatorButton';
import Layout from '../new_components/Layout';  // Import the Layout component

const Create = () => {
  // Define the button keys for the Index page
  const buttonKeys = ["Dope", "Grow", "Wave", "Index"];  // Add/remove keys as necessary
  const currButton = "Creator"//currButton={currButton}

  return (
    <Layout
      buttonKeys={buttonKeys}// Pass the button keys to the Layout
      mainContent={<CreatorButton />}
      faviconUrl="/favicon.ico"
      currButton={currButton}
    />
  );
};

export default Create;
