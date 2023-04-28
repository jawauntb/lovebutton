import React from 'react';
import styles from '../styles/Press.module.css';

const EmojiContainer = ({ emojis }) => (
  <div className={styles.emojiContainer}>
    {emojis.map((emoji, index) => (
      <span
        key={index}
        className={styles.emoji}
        style={{
          animationDelay: `${index * 0.01}s`,
          fontSize: `${Math.floor(Math.random() * 5) + 3}rem`,
          left: `${Math.floor(Math.random() * 90)}%`,
          top: `${Math.floor(Math.random() * 50)}%`,
          transform: `rotate(${Math.floor(Math.random() * 1080)}deg)`,
        }}
      >
        {emoji}
      </span>
    ))}
  </div>
);

export default EmojiContainer;
