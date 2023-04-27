import React, { useState } from 'react';
import styles from '../styles/Press.module.css';
import emojigram from '../utils/emojigram';
import hearts from '../utils/hearts';
import LoveButtonComponent from './LoveButtonComponent';
import EmojiContainer from './EmojiContainer';
import SpecialMessage from './SpecialMessage';
import messages from '../utils/messages';
import getSpecialMessage from '../utils/getSpecialMessage';
import getRandomHeart from '../utils/getRandomHeart';

const LoveButton = () => {
  const [showEmojis, setShowEmojis] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [firstHeart, setFirstHeart] = useState("💖")
  const [clickCount, setClickCount] = useState(0);

  const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
  };

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
  
  const generateEmojis = () => {
    const chosen = Math.random() > 0.5;
    const result = createEmojiResult(emojigram, chosen);
    const countEmoji = "➕" + clickCount.toString();
    const specialMessage = getSpecialMessage(clickCount, messages);
  
    return specialMessage ? [specialMessage, countEmoji, ...result] : [countEmoji, ...result];
  };
  
  const emojis = generateEmojis();
  const first = Math.random()

  return (
    <div className={styles.container}>
      <LoveButtonComponent
        pressed={pressed}
        handleClick={handleHeartClick}
        firstHeart={firstHeart}
      />
      {showEmojis && <EmojiContainer emojis={emojis} />}
    </div>
  );
};

export default LoveButton;
