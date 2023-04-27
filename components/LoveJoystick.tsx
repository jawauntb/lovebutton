import React, { useState } from 'react';
import styles from '../styles/Joy.module.css'
import hearts from '../utils/hearts';
import LoveJoyComponent from './LoveJoyComponent';
import EmojiContainer from './EmojiContainer';
import loveTypeMap from '../utils/loveTypeMap';
import emojigramByLoveType from '../utils/emojigramByLoveType';
import getDragDirection from '../utils/getDragDirection';
import getRandomHeart from '../utils/getRandomHeart';

const LoveJoystick = () => {
  const [showEmojis, setShowEmojis] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [firstHeart, setFirstHeart] = useState("💖");
  const [clickCount, setClickCount] = useState(0);
  const [selectedLoveType, setSelectedLoveType] = useState("Eros");

  const handleHeartClick = () => {
    setShowEmojis(true);
    setPressed(true);
    setClickCount(clickCount + 1);
    setTimeout(() => {
      setShowEmojis(false);
      setPressed(false);
      setFirstHeart(Math.random() > 0.25 ? getRandomHeart(hearts) : "💘");
    }, 6000);
  };

  const handleDrag = (event) => {
    const direction = getDragDirection(event);
    setSelectedLoveType(getLoveTypeByDirection(direction));
  };

  const getLoveTypeByDirection = (direction) => {
    return loveTypeMap[direction] || "Agape"; // Default to Agape if the direction is not found
  };

  const generateJoystickEmojis = () => {
    const chosen = Math.random() > 0.5;
    const emojigram = emojigramByLoveType[selectedLoveType];
    const result = createEmojiResult(emojigram, chosen);
    const countEmoji = "➕" + clickCount.toString();

    if (clickCount === 69) {
      result.unshift("👉👌");
    }

    if (clickCount === 420) {
      result.unshift("🌿");
    }

    if (clickCount === 777) {
      result.unshift("🎰");
    }

    return [countEmoji, ...result];
  };

  const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
  };

  const createEmojiResult = (emojigram, chosen) => {
    const result = [];
    Object.entries(emojigram).forEach(([emoji, number]) => {
      const count = chosen ? number : getRandomNumber(6);
      for (let i = 0; i < count; i++) {
        result.push(emoji);
      }
    });
    return result;
  };

  return (
    <div className={styles.container}>
      <LoveJoyComponent
        pressed={pressed}
        handleClick={handleHeartClick}
        firstHeart={firstHeart}
        handleDrag={handleDrag}
      />
      {showEmojis && (
        <EmojiContainer
          emojis={generateJoystickEmojis()}
        />
      )}
    </div>
  );
};

export default LoveJoystick;
