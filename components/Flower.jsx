// flower.jsx
import { useEffect, useState } from 'react';
import styles from '../styles/Growth.module.css';

const emojis = [
  '🌱',
  '🌺',
  '🌻',
  '🌹',
  '🌼',
  '🌸',
  '🌷',
  '🍀',
  '🍁',
  '🍂',
  '🍃',
  '🌾',
  '🌿',
  '🍄',
];

const Flower = () => {
  const [emojiIndex, setEmojiIndex] = useState(0);
  const [animationEmojis, setAnimationEmojis] = useState([]);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setEmojiIndex((emojiIndex + 1) % emojis.length);
    setAnimationEmojis([]);
    setClickCount(clickCount + 1);
    const countEmoji = "➕" + clickCount.toString();
    const newAnimationEmojis = [countEmoji];

    for (let i = 0; i < 80; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

      newAnimationEmojis.push({ x, y, randomEmoji });
    }
    setTimeout(() => {
      setAnimationEmojis(newAnimationEmojis);
    }, 0);
  };

  return (
    <div onClick={handleClick} className={styles.emojiContainer}>
      <div className={styles.emoji}>{emojis[emojiIndex]}</div>
      {animationEmojis.map(({ x, y, randomEmoji }, index) => (
        <div
          key={index}
          className={`${styles.emoji} ${index % 2 === 0 ? styles.firework : styles.explosion}`}
          style={{ top: `${y}%`, left: `${x}%` }}
        >
          {randomEmoji}
        </div>
      ))}
      <span className={styles.label}>Grow with Me</span>

    </div>
  );
};

export default Flower;
