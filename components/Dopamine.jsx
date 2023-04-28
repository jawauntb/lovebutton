// dopamine.jsx
import React, { useState } from 'react';
import styles from '../styles/Dope.module.css';

const randomAnimation = () => {
  const animations = ['flip', 'sparkle', 'shake'];
  const randomIndex = Math.floor(Math.random() * animations.length);
  const duration = Math.random() * 1 + 1; // Random duration between 1 to 2 seconds
  return `${styles[animations[randomIndex]]} ${duration}s infinite`;
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

  const handleClick = () => {
    const newEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    setEmoji(newEmoji);

    const newExplosion = Array.from({ length: 500 }, () => {
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
    setExplosion(newExplosion);
  };

  const handleMouseDown = () => {
    setButtonAnimation(styles.swell);
  };

  const handleMouseUp = () => {
    setButtonAnimation(styles.shrink);
    setTimeout(() => setButtonAnimation(''), 1000);
  };

  return (
    <div>
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
