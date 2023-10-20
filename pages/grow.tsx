// Grow.tsx
import React from 'react';
import Flower from '../components/Flower';
import Layout from '../new_components/Layout';  // Import the Layout component

const Grow = () => {
  // Define the button keys for the Grow page
  const buttonKeys = ["Rings", "Wave", "Index"];  // Add/remove keys as necessary
  const currButton = "Grow"//currButton={currButton}


  return (
    <Layout
      buttonKeys={buttonKeys}
      mainContent={<Flower />}
      faviconUrl="/flowicon.ico"
      currButton={currButton}
    />
  );
};

export default Grow;
