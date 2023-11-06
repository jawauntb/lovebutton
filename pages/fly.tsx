// index.tsx
import React from 'react';
import FlyButton from '../components/Flies';
import FlyLayout from '../new_components/FlyLayout';

const Fly = () => {
  // Define the button keys for the Index page
  const buttonKeys = ["Grow", "Index"];  // 
  const currButton = "Fly"

  return (
    <FlyLayout
      buttonKeys={buttonKeys}// Pass the button keys to the Layout
      mainContent={<FlyButton />}
      faviconUrl="/favicon.ico"
      currButton={currButton}
    />
  );
};

export default Fly;
