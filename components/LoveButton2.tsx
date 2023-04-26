import React, { useState } from 'react';
import styles from '../styles/Press.module.css';
import emojigram from '../pages/emojigram';
import Head from 'next/head';
import hearts from '../pages/hearts';
import LoveButtonComponent from './LoveButtonComponent';
import EmojiContainer from './EmojiContainer';
import SpecialMessage from './SpecialMessage';

const LoveButton2 = () => {
  const [showEmojis, setShowEmojis] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [firstHeart, setFirstHeart] = useState("💖")
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setShowEmojis(true);
    setPressed(true);
    setClickCount(clickCount + 1);
    setTimeout(() => {
      setShowEmojis(false);
      setPressed(false);
      setFirstHeart(Math.random() > .25 ? getRandomHeart() : "💘")
    }, 6000);
  };

  function getRandomHeart(probability = 0.5) {
    const random = Math.random();
    return random < probability
      ? hearts[Math.floor(Math.random() * hearts.length)]
      : "💖";
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
    const messages = [
      { limit: 100000, interval: 4000, message: "🕯️🥹Will you marry me?💍🕊️" },
      { limit: 50000, interval: 2000, message: "🫶🏾🥹I think we might be ~soulmates~...🕊️∞" },
      { limit: 20000, interval: 1000, message: "🫠I WANT YOU 😻" },
      { limit: 10000, interval: 750, message: "😌No, I love💞 YOU more‼️🥰" },
      { limit: 5000, interval: 600, message: "Be Mine? 💐" },
      { limit: 4000, interval: 500, message: "U + Me 4 ∞" },
      { limit: 2000, interval: 500, message: "😘You're feeling friendly today, huh 😉" },
      { limit: 1000, interval: 250, message: "ILY 2 THE 🌖 & BACK" },
      { limit: 500, interval: 100, message: "you make me feel warm🥰 & fuzzy🤤" },
      { limit: 300, interval: 100, message: "I LOVE YOU SO MUCH 🌊💝💗" },
      { limit: 285, interval: 19, message: "I wanna put a 💍 on it 🫠" },
      { limit: 200, interval: 50, message: "I’ll Never 💔 You" },
      { limit: 0, interval: 100, divisor: 12.5, message: "U Make Me 🤤" },
      { limit: 0, interval: 75, divisor: 15, message: "🥹 LOVE OF MY LIFE???" },
      { limit: 0, interval: 50, message: "😻 wow ur such a love 🤤" },
      { limit: 0, interval: 20, message: "🥳So Much Love 🥹" },
      { limit: 360, interval: 36, message: "I 😈 YOU" },
      { limit: 20, interval: 5, message: "I 🫠 U" },
    ];
  
    for (const { limit, interval, divisor, message } of messages) {
      if (clickCount == 1){
        return "Love💘 Is🪷 The♾️ Universal🪐 Interface⎚"
      }
      if ((clickCount > 1 && clickCount >= limit && clickCount % interval === 0) && (!divisor || clickCount % divisor === 0)) {
        return message;
      }
    }
  
    return null;
  };
  
  const handleShareClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "😘 Click The Love Button 💖🫠",
          url: window.location.href,
        });
      } catch (err) {
        console.error("Failed to share: ", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("URL copied to clipboard! Share it with your friends 🚀");
      } catch (err) {
        console.error("Failed to copy URL: ", err);
      }
    }
  };

  
  
  const generateEmojis = () => {
    const chosen = Math.random() > 0.5;
    const result = createEmojiResult(emojigram, chosen);
    const countEmoji = "➕" + clickCount.toString();
    const specialMessage = getSpecialMessage(clickCount);
  
    return specialMessage ? [specialMessage, countEmoji, ...result] : [countEmoji, ...result];
  };
  
  const emojis = generateEmojis();
  const first = Math.random()

  return (
    <div className={styles.container}>
      {/* Add the share button emoji here */}
      <button
        className={styles.shareButton}
        onClick={handleShareClick}
        title="Share"
      >
        🚀
      </button>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <LoveButtonComponent
        pressed={pressed}
        handleClick={handleClick}
        firstHeart={firstHeart}
      />
      {showEmojis && <EmojiContainer emojis={emojis} />}
    </div>
  );
};

export default LoveButton2;
