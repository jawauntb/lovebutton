import React, { useState } from 'react';
import styles from '../styles/Press.module.css';
import { loveEmojiMap, messages, hearts } from '../utils/emojigram';
import EmojiContainer from './EmojiContainer';
import getSpecialMessage from '../utils/getSpecialMessage';
import CentralEmojiButton from '../new_components/CentralEmojiButton';

const LoveButton = () => {
  const [showEmojis, setShowEmojis] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [firstHeart, setFirstHeart] = useState("💖")
  const [clickCount, setClickCount] = useState(0);

  const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
  };

  function getRandomHeart(probability = 0.5) {
    const random = Math.random();
    const otherRandom = Math.random();
    return random < probability
      ? hearts[Math.floor(otherRandom * hearts.length)]
      : "💖";
  }

  const handleHeartClick = () => {
    setFirstHeart(getRandomHeart());
    setShowEmojis(true);
    setPressed(true);
    setClickCount(clickCount + 1);
    setTimeout(() => {
      setPressed(false);
      // Update this line
    }, 1000);
    setTimeout(() => {
      setShowEmojis(false);
    }, 20000)
  };

  // const createEmojiResult = (loveEmojiMap, chosen) => {
  //   const result = [];
  //   Object.entries(loveEmojiMap).forEach(([emoji, number]) => {
  //     const count = (chosen ? number : getRandomNumber(15)) + (getRandomNumber(clickCount) / 3);
  //     for (let i = 0; i < count; i++) {
  //       result.push(emoji);
  //     }
  //   });
  //   return result;
  // };

  const createEmojiResult = (loveEmojiMap, chosen) => {
    const randomClickCount = getRandomNumber(clickCount) / 100;
    const result = [];

    Object.entries(loveEmojiMap).forEach(([emoji, number]) => {
      const count = (chosen ? number : getRandomNumber(15)) + randomClickCount;
      result.push(...Array(Math.floor(count)).fill(emoji));
    });
    setTimeout(() => {
    }, 100)
    return result;
  };


  const generateEmojis = () => {
    const chosen = Math.random() > 0.5;
    const result = createEmojiResult(loveEmojiMap, chosen);
    const countEmoji = "➕" + clickCount.toString();
    const specialMessage = getSpecialMessage(clickCount, messages);
    return specialMessage ? [specialMessage, countEmoji, ...result] : [countEmoji, ...result];
  };

  const emojis = generateEmojis();

  return (
    <div className={styles.container}>
      <CentralEmojiButton
        pressed={pressed}
        handleClick={handleHeartClick}
        emoji={firstHeart}
        id="love-button"
        emojiClass="heart"
      />
      {showEmojis && <EmojiContainer emojis={emojis} />}
    </div>
  );
};

export default LoveButton;
