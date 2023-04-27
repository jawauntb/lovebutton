import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/Joy.module.css';
import hearts from '../utils/hearts';
import LoveJoyComponent from './LoveJoyComponent';
import EmojiContainer from './EmojiContainer';
import loveTypeMap from '../utils/loveTypeMap';
import emojigramByLoveType from '../utils/emojigramByLoveType';
import getRandomHeart from '../utils/getRandomHeart';

const LoveJoystick = () => {
  const [showEmojis, setShowEmojis] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [firstHeart, setFirstHeart] = useState('💖');
  const [clickCount, setClickCount] = useState(0);
  const [selectedLoveType, setSelectedLoveType] = useState('Eros');
  const [heartPosition, setHeartPosition] = useState({ x: 0, y: 0 });
  const [flingDirection, setFlingDirection] = useState(null);
  const containerRef = useRef(null);

  const handleDragStart = (event) => {
    event.preventDefault();
    setPressed(true);
    setFlingDirection(null);
  };

  const handleDragEnd = (event) => {
    event.preventDefault();
    setPressed(false);
    const direction = getDragDirection(event.clientX, event.clientY);
    setFlingDirection(direction); // Change this line
    const { x, y } = heartPosition;
    const containerRect = containerRef.current.getBoundingClientRect();
    const flingDistance = Math.max(
      containerRect.width,
      containerRect.height
    );
    const flingX =
      x + flingDistance * Math.sin((direction * Math.PI) / 180); // Change this line
    const flingY =
      y - flingDistance * Math.cos((direction * Math.PI) / 180); // Change this line
    setHeartPosition({ x: flingX, y: flingY });
    setShowEmojis(true);
  };

  const handleMouseMove = (event) => {
    // Do not call event.preventDefault() here
    if (pressed) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerCenterX = containerRect.width / 2;
      const containerCenterY = containerRect.height / 2;
      const mouseX = event.clientX - containerRect.left;
      const mouseY = event.clientY - containerRect.top;
      const dx = mouseX - containerCenterX;
      const dy = mouseY - containerCenterY;
      const angle = Math.atan2(dy, dx);
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = containerCenterX - 60; // 60 is half the width of the heart
      const ratio = Math.min(distance / maxDistance, 1);
      const heartX = containerCenterX + dx * ratio;
      const heartY = containerCenterY + dy * ratio;
      setShowEmojis(true);
      setHeartPosition({ x: heartX, y: heartY });
      setSelectedLoveType(getLoveTypeByDirection(angle));
    }
  };
  
  useEffect(() => {
    const containerRect = containerRef.current.getBoundingClientRect();
    if (flingDirection) {
      const emojiContainer = document.querySelector(`.${styles.emojiContainer}`);
      if (emojiContainer) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const emojiContainerRect = emojiContainer.getBoundingClientRect();
        const emojiWidth = emojiContainerRect.width / 8;
        const emojiHeight = emojiContainerRect.height / 8;
        const emojiCount = clickCount % 10 + 5;
        const emojis = generateJoystickEmojis();
        for (let i = 0; i < emojiCount; i++) {
          const emoji = emojis[i % emojis.length];
          const emojiElement = document.createElement('span');
          emojiElement.textContent = emoji;
          emojiElement.classList.add(styles.emoji);
          emojiElement.style.top = `${heartPosition.y}px`;
          emojiElement.style.left = `${heartPosition.x}px`;
          emojiContainer.appendChild(emojiElement);
          const dx = flingDirection === 'E' ? containerRect.width + emojiWidth : flingDirection === 'W' ? -emojiWidth : 0;
          const dy = flingDirection === 'N' ? -emojiHeight : flingDirection === 'S' ? containerRect.height + emojiHeight : 0;
          const duration = getRandomNumber(2000) + 1000;
          const delay = getRandomNumber(500);
          emojiElement.animate(
            [
              { transform: 'translate(0, 0)' },
              { transform: `translate(${dx}px, ${dy}px)` },
            ],
            {
              duration,
              delay,
              easing: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
              fill: 'both',
            }
          ).onfinish = () => {
            emojiElement.remove();
          };
        }
      }
      setHeartPosition({ x: containerRect.width / 2, y: containerRect.height / 2 });
    }
  }, [flingDirection]);
  
  const getDragDirection = (clientX, clientY) => {
    const containerRect = containerRef.current.getBoundingClientRect();
    const containerCenterX = containerRect.width / 2;
    const containerCenterY = containerRect.height / 2;
    const dx = clientX - containerCenterX;
    const dy = containerCenterY - clientY;
    const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
    let direction = Math.round(angle / 45) % 8;
    if (direction < 0) {
      direction += 8;
    }
    return ['E', 'SE', 'S', 'SW', 'W', 'NW', 'N', 'NE'][direction];
  };
  
  const getLoveTypeByDirection = (direction) => {
    return loveTypeMap[direction] || 'Agape'; // Default to Agape if the direction is not found
  };
  
  const generateJoystickEmojis = () => {
    const emojis = createEmojisByDirection(selectedLoveType);
    return emojis;
  };
  
  const renderEmojis = () => {
    const emojiElements = [];
    const radius = 100; // Adjust this value to position the emojis further or closer to the heart

    for (const direction in loveTypeMap) {
      const loveType = loveTypeMap[direction];
      const angle = getAngleByDirection(direction);
      const emoji = Object.keys(emojigramByLoveType[loveType])[0];
      const x = heartPosition.x + radius * Math.cos(angle * Math.PI / 180);
      const y = heartPosition.y - radius * Math.sin(angle * Math.PI / 180);

      emojiElements.push(
        <div
          key={direction}
          style={{
            position: 'absolute',
            left: x,
            top: y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {emoji}
        </div>
      );
    }

    return emojiElements;
  };
  
  const createEmojisByDirection = (loveType) => {
    const emojis = emojigramByLoveType[loveType] || [];
    return Object.keys(emojis).flatMap((emoji) => Array(emojis[emoji]).fill(emoji));
  };
  const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
  };

  const createEmojiResult = (emojigram, chosen) => {
    if (chosen) {
      return [...emojigram];
    }
    const length = Math.floor(Math.random() * emojigram.length);
    return emojigram.slice(0, length);
  };

  const handleDrag = (event) => {
    if (pressed) {
      setHeartPosition({
        x: event.clientX,
        y: event.clientY,
      });
    }
  };


  return (
    <div
      className={styles.container}
      onMouseMove={handleMouseMove}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
      onTouchCancel={handleDragEnd}
      onTouchMove={handleMouseMove}
      ref={containerRef}
    >
      <LoveJoyComponent
        firstHeart={firstHeart}
        heartPosition={heartPosition}
        pressed={pressed}
        handleDrag={handleMouseMove}
      />
      {showEmojis && (
        <EmojiContainer
          emojis={generateJoystickEmojis()}
          selectedLoveType={selectedLoveType}
          flingDirection={flingDirection}
        />
      )}
      <div className={styles.representativeEmojis}>
        <span className={styles.joyEmojiN}>{emojigramByLoveType['Agape'][0]}</span>
        <span className={styles.joyEmojiS}>{emojigramByLoveType['Eros'][0]}</span>
        <span className={styles.joyEmojiE}>{emojigramByLoveType['Philia'][0]}</span>
        <span className={styles.joyEmojiW}>{emojigramByLoveType['Pragma'][0]}</span>
        <span className={styles.joyEmojiNW}>{emojigramByLoveType['Ludus'][0]}</span>
        <span className={styles.joyEmojiNE}>{emojigramByLoveType['Storge'][0]}</span>
        <span className={styles.joyEmojiSW}>{emojigramByLoveType['Philautia'][0]}</span>
        <span className={styles.joyEmojiSE}>{emojigramByLoveType['Mania'][0]}</span>
      </div>
    </div>
  );
};

export default LoveJoystick;

  