// index.tsx
import React from 'react';
import LoveButton from '../components/LoveButton';
import Layout from '../new_components/Layout';  // Import the Layout component

const Index = () => {
  // Define the button keys for the Index page
  const buttonKeys = ["Rings", "Dems", "Dope", "Grow", "Wave"];  // Add/remove keys as necessary
  const currButton = "Index"//currButton={currButton}

  return (
    <Layout
      buttonKeys={buttonKeys}// Pass the button keys to the Layout
      mainContent={<LoveButton />}
      faviconUrl="/favicon.ico"
      currButton={currButton}
    />
  );
};

export default Index;
