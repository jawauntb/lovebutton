import React, { useState } from "react";
import styles from "../styles/LoveButton.module.css";


const LoveButton = () => {
  const [showEmojis, setShowEmojis] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setShowEmojis(true);
    setIsPressed(true);
    setTimeout(() => {
      setShowEmojis(false);
      setIsPressed(false);
    }, 10000);
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
      <button className={`${styles.button} ${isPressed && styles.pressed}`} onClick={handleClick}>
        <span className={styles.buttonText}>Press for Love</span>
        <span className={styles.buttonIcon}>❤️</span>
      </button>
      {showEmojis && (
        <div className={styles.emojiContainer}>
          {emojis.map((emoji, index) => (
            <span
              key={index}
              className={`${styles.emoji} ${index % 3 === 0 && styles.fire}`}
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

export default LoveButton;

