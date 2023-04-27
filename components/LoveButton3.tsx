import React, { useState } from 'react';
import LoveJoystick from './LoveJoystick';
import styles from '../styles/Press.module.css';
import Head from 'next/head';
import LoveButtonComponent from './LoveButtonComponent';
import EmojiContainer from './EmojiContainer';
import messages from './messages';

const LoveButton3 = () => {
  const [showEmojis, setShowEmojis] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [firstHeart, setFirstHeart] = useState('💖');
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setShowEmojis(true);
    setPressed(true);
    setClickCount(clickCount + 1);
    setTimeout(() => {
      setShowEmojis(false);
      setPressed(false);
      setFirstHeart(Math.random() > 0.25 ? getRandomHeart() : '💘');
    }, 6000);
  };

  function getRandomHeart(probability = 0.5) {
    const random = Math.random();
    return random < probability
      ? hearts[Math.floor(Math.random() * hearts.length)]
      : '💖';
  }

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

  const getSpecialMessage = (clickCount) => {
    for (const { limit, interval, divisor, message } of messages) {
      if (clickCount == 1) {
        return 'Love💘 Is🪷 The♾️ Universal🪐 Interface⎚';
      }
      if (
        clickCount > 1 &&
        clickCount >= limit &&
        clickCount % interval === 0 &&
        (!divisor || clickCount % divisor === 0)
      ) {
        return message;
      }
    }

    return null;
  };

  const handleShareClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '😘 Click The Love Button 💖🫠',
          url: window.location.href,
        });
      } catch (err) {
        console.error('Failed to share: ', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('URL copied to clipboard! Share it with your friends 🚀');
      } catch (err) {
        console.error('Failed to copy URL: ', err);
      }
    }
  };

  const generateEmojis = () => {
    const chosen = Math.random() > 0.5;
    const result = createEmojiResult(emojigram, chosen);
    const countEmoji = '➕' + clickCount.toString();
    const specialMessage = getSpecialMessage(clickCount);

    return specialMessage ? [specialMessage, countEmoji, ...result] : [countEmoji, ...result];
  };

  const emojis = generateEmojis();

  return (
    <div className={styles.container}>
      <button
        className={styles.shareButton}
        onClick={handleShareClick}
        title="Share"
      >
        🚀
      </button>
      <LoveButtonComponent
        pressed={pressed}
        handleClick={handleClick}
        firstHeart={firstHeart}
        showJoystick={showJoystick}
        toggleJoystick={toggleJoystick}
        showButtonMode={showButtonMode}
        toggleButtonMode={toggleButtonMode}
      />
      {showEmojis && <EmojiContainer emojis={emojis} />}
    </div>
  );
}

export default LoveButton3