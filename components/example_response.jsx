import React, { useState } from 'react';
import styles from '../styles/Thing.module.css';
import ThingSubComponent from '../ThingSubComponent';

const Thing = () => {
  const [input, setInput] = useState('');
  const [thingValue, setThingValue] = useState('');

  const fetchResponse = async (input) => {
    try {
      const response = await fetch('https://example.person.repl.co/poast', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input }),
      });

      const data = await response.json();
      return data.response || '';
    } catch (error) {
      console.error(error);
      return '';
    }
  };

  const handleInputSubmit = async (e) => {
    e.preventDefault();
    const res = await fetchResponse(input);
    setThingValue(res);
  };

    return (
    <div className={styles.container}>
      <form onSubmit={handleInputSubmit}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter text"
          className={styles.input}
        />
      </form>
      <div className={styles.thing}>
        <ThingSubComponent thing={thingValue} />
      </div>
    </div>
  );
};

export default Thing;