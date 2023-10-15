import React, { useState, useEffect } from 'react';
import styles from '../styles/Resonance.module.css';
import RingComponent from './RingComponent';
import Spinner from './Spinner';

const Resonance = () => {
  const [input, setInput] = useState('');
  const [rings, setRings] = useState([]);
  const [size, setSize] = useState(1);
  const [speed, setSpeed] = useState(1);
  const [rotateCircles, setRotateCircles] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRelatedEmojis = async (input) => {
    try {
      setIsLoading(true);
      const response = await fetch('https://emojipt-jawaunbrown.replit.app/emojis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input }),
      });

      const data = await response.json();
      setIsLoading(false);
      return data.emojis || [];
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      return [];
    }
  };

  const ringDisplayMode = rotateCircles ? 'circle' : 'wave';
  const handleInputSubmit = async (e) => {
    e.preventDefault();
    const emojis = await fetchRelatedEmojis(input);
    const newRing = {
      emojis: emojis,
      speed: speed,
      size: size,
    };
    setInput('');
    setRings([...rings, newRing]);
  };

  const handleRemoveRing = () => {
    setRings(rings.slice(0, -1));
  };

  const handleClearRings = () => {
    setRings([]);
  };

  return (
    <div className={styles.componentcontainer}>
      <div className={styles.rings}>
        {isLoading ? <Spinner /> :
          rings.map((ring, index) => (
            <RingComponent key={index} emojis={ring.emojis} speed={ring.speed} size={ring.size} displayMode={ringDisplayMode} />
          ))
        }
      </div>
      <div className={styles.form}>
        <form onSubmit={handleInputSubmit} >
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="enter some words to create resonance"
            className={styles.input}
          />
          <button type="submit" className={styles.submit}>+</button>
        </form>
        {!!rings && rings.length > 0 &&
          <div>
            <button onClick={handleRemoveRing} className={styles.button}>
              -
            </button>
            <button onClick={handleClearRings} className={styles.button}>
              x
            </button>
            <button
              onClick={(e) => setRotateCircles(!rotateCircles)}
              className={styles.button}
            >
              {rotateCircles ? 'Pause' : 'Resonate'}
            </button>
          </div>}
        <label className={styles.labeler}>
          Size
          <input
            type="range"
            min="0.1"
            max="2"
            step="0.1"
            value={size}
            onChange={(e) => setSize(parseFloat(e.target.value))}
            className={styles.slider}
          />
        </label>

        <label className={styles.labeler}>
          Speed
          <input
            type="range"
            min="1"
            max="70"
            step="1"
            value={speed}
            onChange={(e) => setSpeed(parseInt(e.target.value))}
            className={styles.slider}
          />
        </label>


      </div>
    </div>
  );
};

export default Resonance;
