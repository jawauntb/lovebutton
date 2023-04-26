import React, { useState } from "react";
import styles from "../styles/LoveButton9.module.css";

const LoveButton8 = () => {
  const [showEmojis, setShowEmojis] = useState(false);
  const [burstHeart, setBurstHeart] = useState(false);

  const handleClick = () => {
    setBurstHeart(true);
    setShowEmojis(true);
    setTimeout(() => {
      setShowEmojis(false);
      setBurstHeart(false);
    }, 1000);
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

  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${burstHeart ? styles.burst : ""}`}
        onClick={handleClick}
      >
        <span className={styles.heart}>❤️</span>
      </button>
      <div className={styles.text}>Press for love</div>
      {showEmojis && (
        <div className={styles.emojis}>
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
    </div>
  );
};

export default LoveButton8;
