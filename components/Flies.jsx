import React, { useState, useEffect } from 'react';
import styles from '../styles/Press.module.css';
import { flyEmojiMap, flyButtons, flyMessages } from '../utils/emojigram';
import EmojiContainer from './EmojiContainer';
import getSpecialMessage from '../utils/getSpecialMessage';
import CentralEmojiButton from '../new_components/CentralEmojiButton';

const FlyButton = () => {
  const [showEmojis, setShowEmojis] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [firstFly, setFirstFly] = useState("🪰")
  const [clickCount, setClickCount] = useState(0);
  const [emojis, setEmojis] = useState([])
  const [flyButtonClass, setFlyButtonClass] = useState('still-fly')

  useEffect(() => {
    setFlyButtonClass('buzzing-fly')
    setEmojis(generateEmojis())
  }, [clickCount]);

  const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
  };

  const getRandomFly = (probability = 0.5) => {
    const random = Math.random();
    const otherRandom = Math.random();
    const x = Math.floor(otherRandom * flyButtons.length)
    const nextButton = flyButtons[x]
    return random < probability
      ? nextButton
      : "🪰";
  }

  function vibratePhone() {
    // Check if the Vibration API is supported in the browser
    if ("vibrate" in navigator) {
      // Vibration pattern: vibrate for 500ms
      navigator.vibrate(500);
    }
  }

  const handleFlyClick = () => {
    vibratePhone()
    setFirstFly(getRandomFly());
    setShowEmojis(true);
    setPressed(true);
    setClickCount(clickCount + 1);
    setFlyButtonClass('still-fly')
    setTimeout(() => {
      setPressed(false);
      setShowEmojis(false);
    }, 10000)
  };

  const createEmojiResult = (flyEmojiMap) => {
    const result = [];
    flyEmojiMap.forEach((emoji) => {
      const count = getRandomNumber(25)
      const ary = Array(Math.floor(count))
      const flyry = ary.fill(emoji)
      result.push(...flyry);
    });
    return result;
  };


  const generateEmojis = () => {
    const result = createEmojiResult(flyEmojiMap);
    console.log('result', result)
    const countEmoji = "➕" + clickCount.toString();
    const specialMessage = getSpecialMessage(clickCount, flyMessages);
    return specialMessage ? [specialMessage, countEmoji, ...result] : [countEmoji, ...result];
  };

  return (
    <div className={styles.flycontainer}>
      <CentralEmojiButton
        pressed={pressed}
        handleClick={handleFlyClick}
        emoji={firstFly}
        id="fly-button"
        emojiClass={`${flyButtonClass}`}
      />
      {showEmojis && <EmojiContainer emojis={emojis} style={'fly-emoji'} />}
    </div>
  );
};

export default FlyButton;
