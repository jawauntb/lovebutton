import React, { useState } from "react";
import styles from "../styles/Press.module.css";
import emojigram from "./emojigram"

const LoveButton = () => {
  const [showEmojis, setShowEmojis] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [firstHeart, setFirstHeart] = useState("💖")

  const handleClick = () => {
    setShowEmojis(true);
    setPressed(true);
    setTimeout(() => {
      setShowEmojis(false);
      setPressed(false);
      setFirstHeart(Math.random() > .25 ? getRandomHeart() : "💘")
    }, 1700);
  };

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

  const generateEmojis = () => {
    const result = [];
    Object.entries(emojigram).map(([emoji, number]) => {
      for (let i = 0; i < number; i++) {
        result.push(emoji);
      }
    });
    return result;
  };


  const emojis = generateEmojis();
  const first = Math.random()

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
