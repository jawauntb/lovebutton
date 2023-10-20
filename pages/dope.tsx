// Dope.tsx
import React from 'react';
import Dopamine from '../components/Dopamine';
import Layout from '../new_components/Layout';  // Import the Layout component

const Dope = () => {
  const currButton = "Dope"//currButton={currButton}

  return (
    <Layout
      buttonKeys={[]}  // Empty array as there are no buttons on the Dope page
      mainContent={<Dopamine />}
      faviconUrl="/candicon.ico"
      currButton={currButton}
    />
  );
};

export default Dope;
