import { useEffect, useState, useRef } from "react";
import styles from '../styles/Aqua.module.css';
import { waterEmojiMap } from '../utils/emojigram';
import CentralEmojiButton from '../new_components/CentralEmojiButton';

const getRandomWaterEmoji = () => {
  return Math.random() > .2 ? waterEmojiMap[Math.floor(Math.random() * waterEmojiMap.length)] : "🌊🌊";
};

const Aqua = () => {
  const waveContainerRef = useRef(null);
  const [clickCount, setClickCount] = useState(0);

  const createWave = () => {
    setClickCount(clickCount + 1)
    const waveSize = 50;
    const wave = [];
    for (let i = 0; i < waveSize; i++) {
      wave.push(getRandomWaterEmoji());
    }
    const countEmoji = "➕" + clickCount.toString();
    wave.push(countEmoji)
    return wave;
  };

  const unleashWave = (event) => {
    if (!waveContainerRef.current) return;
    const wave = createWave();
    const waveContainer = waveContainerRef.current;
    wave.forEach((emoji) => {
      const element = document.createElement("span");
      element.className = styles.waterEmoji;
      element.textContent = emoji;
      element.style.fontSize = "2em";
      element.style.color = "skyblue";
      // element.style.position = 'relative'; // Add this lineQ
      element.style.left = `${event.clientX - 24}px`;
      element.style.top = `${event.clientY - 24}px`;
      // Calculate random positions across the screen
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const x = Math.floor(Math.random() * screenWidth) - event.clientX;
      const y = Math.floor(Math.random() * screenHeight) - event.clientY;

      waveContainer.appendChild(element);

      // Use a CSS transition instead of a setTimeout
      element.style.transition = 'transform 0.5s';
      element.style.transform = `translate(${x}px, ${y}px)`;

      element.style.transition = 'transform 1s';
      element.style.left = `${parseFloat(element.style.left) + x}px`;
      element.style.top = `${parseFloat(element.style.top) + y}px`;
      element.style.transform = `translate(0,0)px`;
      setTimeout(() => {
        waveContainer.removeChild(element);
      }, 10000);
    });
  };

  return (
    <div ref={waveContainerRef} className={styles.emojiContainer}>
      <CentralEmojiButton
        pressed={false}
        handleClick={unleashWave}
        onTouchStart={unleashWave}
        onMouseDown={unleashWave}
        emoji="🌊"
        emojiClass="centerWave" // since we want the default style to be applied, specifying it explicitly here
      />
    </div>
  );
}

export default Aqua;
