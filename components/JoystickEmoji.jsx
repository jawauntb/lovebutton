import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import styles from "../styles/Press.module.css";
import EmojiContainer from "./EmojiContainer";
import emojigramByLoveType from '../utils/emojigramByLoveType';
import loveTypeMap from '../utils/loveTypeMap';

const JoystickComponent = dynamic(
  () => import("./JoystickComponent"),
  { ssr: false }
);

const JoystickEmoji = () => {
  const [showEmojis, setShowEmojis] = useState(false);
  const [dragDirection, setDragDirection] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getEmojisByDirection = (direction) => {
    const loveType = loveTypeMap[direction];
    return emojigramByLoveType[loveType];
  };

  const handleJoystickDrag = (direction) => {
    setDragDirection(direction);
    setShowEmojis(true);
  };

  const handleJoystickRelease = () => {
    setShowEmojis(false);
  };

  const handleManagerEvent = (event) => {
    console.log("Manager event:", event.type, event);
  };

  const emojis = dragDirection ? getEmojisByDirection(dragDirection) : [];

  return (
    <div className={styles.container}>
      {isMounted && (
        <JoystickComponent
          onDrag={handleJoystickDrag}
          onRelease={handleJoystickRelease}
          managerListener={handleManagerEvent}
        />
      )}
      {showEmojis && <EmojiContainer emojis={emojis} />}
    </div>
  );
};

export default JoystickEmoji;
