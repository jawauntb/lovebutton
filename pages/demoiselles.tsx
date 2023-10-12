// Demoiselles.tsx
import React from 'react';
import Avignon from '../components/Avignon';
import Layout from '../new_components/Layout';  // Import the Layout component

const Demoiselles = () => {
  // Define the button keys for the Demoiselles page
  const buttonKeys = ["Grow", "Wave", "Index"];  // Add/remove keys as necessary

  return (
    <Layout
      buttonKeys={buttonKeys}  // Pass the button keys to the Layout
      mainContent={<Avignon />}
      faviconUrl="/ogricon.ico"
    />
  );
};

export default Demoiselles;
