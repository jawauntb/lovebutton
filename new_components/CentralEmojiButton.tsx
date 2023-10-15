import React, { MouseEventHandler } from 'react';
import styles from '../styles/Press.module.css';


type CentralEmojiButtonProps = {
  pressed: boolean;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  emoji: string;
  id?: string; // Optional because we provide a default value
  emojiClass?: string; // Optional because we provide a default value
};

const CentralEmojiButton: React.FC<CentralEmojiButtonProps> = ({ pressed, handleClick, emoji, id, emojiClass }) => (
  <button
    className={`${styles.button} ${pressed ? styles.pressed : ''}`}
    onClick={handleClick}
    id={id}
  >
    <span className={styles[`${emojiClass}`]}>{emoji}</span>
  </button>
);

export default CentralEmojiButton;
