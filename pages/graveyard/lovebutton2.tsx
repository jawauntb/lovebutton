import React, { useState } from "react";
import styles from "../styles/LoveButton2.module.css";

const LoveButton = () => {
  const [showEmojis, setShowEmojis] = useState(false);
  const [showFireEmojis, setShowFireEmojis] = useState(false);

  const handleClick = () => {
    setShowEmojis(true);
    setTimeout(() => setShowEmojis(false), 8000);

    setShowFireEmojis(true);
    setTimeout(() => setShowFireEmojis(false), 19000);
  };

  const generateEmojis = () => {
    const emojis = [
      "💛",
      "❤️",
      "💙",
      "🔺",
      "⏹",
      "⭕",
      "🌺",
      "🕰️",
      "🔀",
      "🔺",
      "🎨",
      "🎵",
      "📚",
      "💭",
      "🌎",
      "🌌",
      "🪐",
      "🌸",
      "🌻",
      "🌞",
      "💫",
      "🧬",
      "🧠",
      "🌊",
      "🌈",
      "✨",
      "🌟",
      "👁️",
      "👨‍🎨",
      "🧑‍🔬",
    ];
    const result = [];
    for (let i = 0; i < 50; i++) {
      const randomIndex = Math.floor(Math.random() * emojis.length);
      result.push(emojis[randomIndex]);
    }
    return result;
  };

  const emojis = generateEmojis();
  const fireEmojis = ["🔥", "🎆", "🎇", "🌠", "✨"];

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleClick}>
        <span role="img" aria-label="heart" className={styles.heart}>
          ❤️
        </span>
        <span className={styles.text}>Press for Love</span>
      </button>
      {showEmojis && (
        <div className={styles.emojiContainer}>
          {emojis.map((emoji, index) => (
            <span
              key={index}
              className={styles.emoji}
              style={{
                animationDelay: `${index * 0.1}s`,
                fontSize: `${Math.floor(Math.random() * 3) + 1}rem`,
                left: `${Math.floor(Math.random() * 100)}%`,
                top: `${Math.floor(Math.random() * 100)}%`,
                transform: `rotate(${Math.floor(Math.random() * 360)}deg)`,
              }}
            >
              {emoji}
            </span>
          ))}
        </div>
      )}
      {showFireEmojis && (
        <div className={styles.fireEmojiContainer}>
          {fireEmojis.map((emoji, index) => (
            <span
              key={index}
              className={styles.fireEmoji}
              style={{
                animationDelay: `${index * 0.1}s`,
                fontSize: `${Math.floor(Math.random() * 2) + 2}rem`,
                left: `${Math.floor(Math.random() * 100)}%`,
                top: `${Math.floor(Math.random() * 100)}%`,
              }}
            >
              {emoji}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default LoveButton;
