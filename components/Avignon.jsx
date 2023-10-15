import React, { useState, useEffect } from "react";
import styles from "../styles/Demoiselles.module.css";
import { paintingEmojis, demoisellesEmojiButtons } from '../utils/emojigram';


const getRandomPosition = () => {
  const x = Math.random() * (window.innerWidth - 54);
  const y = Math.random() * (window.innerHeight - 54);
  return { x, y };
};


const Avignon = () => {
  const [emojis, setEmojis] = useState([]);
  const [buttonEmoji, setButtonEmoji] = useState("🍇🍉🍊");
  // Define the exhaustive list of emojis related to the painting

  const handleClick = () => {
    const newEmojis = paintingEmojis.map((emoji) => ({
      emoji,
      position: getRandomPosition(),
    }));
    setEmojis(newEmojis);
  };

  useEffect(() => {
    // Create an interval to switch the button emoji
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % demoisellesEmojiButtons.length;
      setButtonEmoji(demoisellesEmojiButtons[index]);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <button className={styles.emojiButton} onClick={handleClick}>
        {buttonEmoji}
      </button>
      <div className={styles.emojisContainer}>
        {emojis.map((emojiObj, index) => (
          <span
            key={index}
            className={styles.releasedEmoji}
            style={{
              left: emojiObj.position.x,
              top: emojiObj.position.y,
            }}
          >
            {emojiObj.emoji}
          </span>
        ))}
      </div>
      {/* <div className={styles.pinkMask}></div> */}
    </div>
  );
};

export default Avignon;
