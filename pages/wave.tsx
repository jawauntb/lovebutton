// wave.tsx
import React from 'react';
import Aqua from '../components/Aqua';
import Layout from '../new_components/Layout';  // Import the Layout component

const Wave = () => {
  // Define the button keys for the Wave page
  const buttonKeys = ["Rings", "Grow", "Index"];  // Add/remove keys as necessary

  return (
    <Layout
      buttonKeys={buttonKeys}  // Pass the button keys to the Layout
      mainContent={<Aqua />}
      faviconUrl="/wavicon.ico"
    />
  );
};

export default Wave;
