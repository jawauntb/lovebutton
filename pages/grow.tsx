// Grow.tsx
import React from 'react';
import Flower from '../components/Flower';
import Layout from '../new_components/Layout';  // Import the Layout component

const Grow = () => {
  // Define the button keys for the Grow page
  const buttonKeys = ["Dems", "Wave", "Index"];  // Add/remove keys as necessary

  return (
    <Layout
      buttonKeys={buttonKeys}
      mainContent={<Flower />}
      faviconUrl="/flowicon.ico"
    />
  );
};

export default Grow;
