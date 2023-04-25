import React, { useState, useEffect } from "react";
import styles from "../styles/LoveButton1.module.css";

const LoveButton = () => {
  const [showEmojis, setShowEmojis] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    if (showFireworks) {
      const timeout = setTimeout(() => {
        setShowFireworks(false);
      }, 10000);
      return () => clearTimeout(timeout);
    }
  }, [showFireworks]);

  const handleClick = () => {
    setShowEmojis(true);
    setShowFireworks(true);
    setTimeout(() => setShowEmojis(false), 3000);
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
  const fireworkEmojis = ["🎉", "🎊", "🎇", "🎆"];

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleClick}>
        Love Button
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
      {showFireworks && (
        <div className={styles.fireworkContainer}>
          {fireworkEmojis.map((emoji, index) => (
            <span
              key={index}
              className={styles.fireworkEmoji}
              style={{
                animationDelay: `${index * 0.5}s`,
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
