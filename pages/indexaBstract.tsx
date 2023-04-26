import React, { useState } from "react";
import styles from "../styles/Press.module.css";

const LoveButton = ({ emojiHistogram }) => {
  const [showEmojis, setShowEmojis] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [firstHeart, setFirstHeart] = useState("💖");

  const handleClick = () => {
    setShowEmojis(true);
    setPressed(true);
    setTimeout(() => {
      setShowEmojis(false);
      setPressed(false);
      setFirstHeart(Math.random() > 0.25 ? getRandomHeart() : "💘");
    }, 2600);
  };

  const generateEmojis = () => {
    const emojis = Object.entries(emojiHistogram).flatMap(([emoji, count]) =>
      Array.from({ length: count }, () => emoji)
    );

    const result = [];
    for (let i = 0; i < 50; i++) {
      const randomIndex = Math.floor(Math.random() * emojis.length);
      result.push(emojis[randomIndex]);
    }
    return result;
  };

  const emojis = generateEmojis();

  function getRandomHeart(probability = 0.5) {
    const hearts = [
      "💞",
      "💝",
      "❣️",
      "💕",
      "💖",
      "🕯️",
      "🕊️",
      "💗",
      "😈",
      "😩",
      "💘",
      "🌊💝",
      "💔",
      "∞",
      "∞ + ♾️",
      "♾️",
      "🫠",
      "🪷",
      "𑁍",
      "👨‍👩‍👧‍👦",
      "🫶🏾",
      "🤍",
      "🌺",
      "🕰️",
      "💞",
      "💌",
      "💍",
    ];
    const random = Math.random();
    return random < probability
      ? hearts[Math.floor(Math.random() * hearts.length)]
      : "💖";
  }

  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${pressed ? styles.pressed : ""}`}
        onClick={handleClick}
      >
        <span className={styles.heart}>{firstHeart}</span>
        <span className={styles.label}>Press for Love</span>
      </button>
      {showEmojis && (
        <div className={styles.emojiContainer}>
          {emojis.map((emoji, index) => (
            <span
              key={index}
              className={styles.emoji}
              style={{
                animationDelay: `${index * 0.01}s`,
                fontSize: `${Math.floor(Math.random() * 5) + 3}rem`,
                left: `${Math.floor(Math.random() * 150)}%`,
                top: `${Math.floor(Math.random() * 100)}%`,
                transform: `rotate(${Math.floor(Math.random() * 1080)}deg)`,
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
