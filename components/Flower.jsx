// flower.jsx
import { useEffect, useState } from 'react';
import styles from '../styles/Growth.module.css';
import { plants } from '../utils/emojigram';

const Flower = () => {
  const [emojiIndex, setEmojiIndex] = useState(0);
  const [animationEmojis, setAnimationEmojis] = useState([]);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setEmojiIndex((emojiIndex + 1) % plants.length);
    setAnimationEmojis([]);
    setClickCount(clickCount + 1);
    const countEmoji = "➕" + clickCount.toString();
    const newAnimationEmojis = [countEmoji];

    for (let i = 0; i < 200; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const randomEmoji = plants[Math.floor(Math.random() * plants.length)];

      newAnimationEmojis.push({ x, y, randomEmoji });
    }
    setTimeout(() => {
      setAnimationEmojis(newAnimationEmojis);
    }, 0);
  };

  return (
    <div onClick={handleClick} className={styles.emojiContainer}>
      <div className={styles.centralEmoji}>{plants[emojiIndex]}</div>
      {animationEmojis.map(({ x, y, randomEmoji }, index) => (
        <div
          key={index}
          className={`${styles.emoji} ${index % 2 === 0 ? styles.firework : styles.explosion}`}
          style={{ top: `${y}%`, left: `${x}%` }}
        >
          {randomEmoji}
        </div>
      ))}
    </div>
  );
};

export default Flower;
