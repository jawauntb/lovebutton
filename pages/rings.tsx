// Rings.tsx
import React from 'react';
import Resonance from '../components/Resonance';
import Layout from '../new_components/Layout';  // Import the Layout component

const Rings = () => {
  // Define the button keys for the Rings page
  const buttonKeys = ["Index"];  // Add/remove keys as necessary

  return (
    <Layout
      buttonKeys={buttonKeys}
      mainContent={<Resonance />}
      faviconUrl="/resicon.ico"
    />
  );
};

export default Rings;
