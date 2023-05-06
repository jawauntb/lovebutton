// dopamine.jsx
import React, { useState, useCallback } from 'react';
import styles from '../styles/Dope.module.css';
import handleDopeShareClick from '../utils/handleDopeShareClick';
import { useRouter } from 'next/router';

const randomAnimation = () => {
  const animations = ['flip', 'sparkle', 'shake'];
  const randomIndex = Math.floor(Math.random() * animations.length);
  const duration = Math.random() * 1 + 1; // Random duration between 1 to 2 seconds
  return `${styles[animations[randomIndex]]} ${duration}s infinite`;
};

// debounce function
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

const emojis = ['🔥', '💎', '🎇', '🧨', '🍬', '💰', '🍑', '✨'];
// dopamine.jsx
const explosionEmojis = [
  '🌹', '🌺', '🥀', '🏵️', '🔥', '☄️', '❤️‍🔥', '🕯️', '🧨', '🎆', '🎇', '💣', '⛽️', '💡', '🚥', '🩵', '🏮', '😵‍💫', '🔆', '🔅', '⚡️', '⛈️', '🌩️', '💨', '🍃', '🌬️', '🎐', '🕉️', '💖', '🧮', '📯', '🪭', '🎉', '🪅', '🎊', '🎁', '🎈', '🖼️', '🗝️', '🛁', '🚿', '🔮', '🧿', '💎', '🪪', '💶', '💴', '💳', '💷', '💸', '💵', '🔋', '🌋', '⛲️', '🎠', '🗽', '🏖️', '🏝️', '🗺️', '⚓️', '🚀', '🛰️', '✈️', '⛵️', '🚂', '🚨', '🏎️', '🎯', '🎮', '🧩', '🎺', '🎷', '🎻', '🎨', '🎖️', '🥇', '🏆', '🏅', '🎗️', '🎟️', '🎭', '🏄🏾‍♀️', '🏄🏾‍♂️', '🤾🏽‍♂️', '🏌🏽', '🤺', '🥊', '🤿', '🏹', '🏀', '⚽️', '⚾️', '🎱', '🍻', '🍹', '🍾', '🍭', '🍬', '🍦', '🍡', '🍥', '🍑', '❄️', '🎿', '⛷️', '✨', '⚡️', '🪷', '🐲', '🦚', '🪽', '🐬', '👑', '🪡', '💉', '🌆', '🌄', '🌇', '🏞️', '🧠', '🫀', '🫁', '👀', '🫵🏾', '🤟🏾', '🤘🏾', '😻', '🤖', '🤑', '🪙', '🧧', '💲', '💳', '🦾'
];

const Dopamine = () => {
  const [emoji, setEmoji] = useState('❤️‍🔥');
  const [explosion, setExplosion] = useState([]);
  const [buttonAnimation, setButtonAnimation] = useState('');
  const router = useRouter();

  const goToIndex = () => {
    router.push('/');
  };
  const goToGrow = () => {
    router.push('/grow')
  }
  const goToWave = () => {
    router.push('/wave');
  };
  const maxExplosionEmojis = 400; // Set a limit for the maximum number of explosion emojis

  const handleClick = () => {
    const newEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    setEmoji(newEmoji);

    const newExplosion = Array.from({ length: 50 }, () => { // Reduce the number of emojis generated on each click
      const randomEmoji = explosionEmojis[Math.floor(Math.random() * explosionEmojis.length)];
      const xPos = Math.random() * window.innerWidth;
      const yPos = Math.random() * window.innerHeight;
      return {
        emoji: randomEmoji,
        style: {
          left: `${xPos}px`,
          top: `${yPos}px`,
        },
      };
    });

    if (explosion.length + newExplosion.length > maxExplosionEmojis) {
      const remainingExplosionEmojis = maxExplosionEmojis - newExplosion.length;
      setExplosion([...explosion.slice(-remainingExplosionEmojis), ...newExplosion]);
    } else {
      setExplosion([...explosion, ...newExplosion]);
    }
  };


  const handleMouseDown = useCallback(
    debounce(() => {
      setButtonAnimation(styles.swell);
      setTimeout(() => setButtonAnimation(''), 0);
    }, 10),
    []
  );

  const handleMouseUp = useCallback(
    debounce(() => {
      setButtonAnimation(styles.shrink);
      setTimeout(() => setButtonAnimation(''), 0);
    }, 10),
    []
  );



  return (
    <div>
      <div className={styles.buttonContainer}>
        <button
          className={`${styles.shareButton} ${styles.growButton}`}
          onClick={goToGrow}
          title="Go to Grow"
        >
          🪷
        </button>
        <button
          className={`${styles.shareButton} ${styles.waveButton}`}
          onClick={goToWave}
          title="Go to Wave"
        >
          🌊
        </button>
        <button
          className={`${styles.shareButton} ${styles.heartButton}`}
          onClick={goToIndex}
          title="Go to Love"
        >
          💖
        </button>
        <button
          className={`${styles.shareButton} ${styles.rocketButton}`}
          onClick={handleDopeShareClick}
          title="Share"
        >
          🚀
        </button>
      </div>
      <button
        className={`${styles.emojiButton} ${buttonAnimation}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onClick={handleClick}
        id={styles.dopest}
      >
        {emoji}
      </button>
      {explosion.map((item, index) => (
        <span
          key={index}
          className={`${styles.emoji} ${randomAnimation()}`}
          style={item.style}
        >
          {item.emoji}
        </span>
      ))}
    </div>
  );
};

export default Dopamine;
