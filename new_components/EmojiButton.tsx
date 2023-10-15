import React, { useState } from 'react';

export type EmojiButtonProps = {
  initialEmoji: string;
  generateEmojisFunction: () => string;
  styles: { [key: string]: string };
  onEmojiClick?: () => void; // This is made optional with the "?" since not all usages might pass it
};

const EmojiButton: React.FC<EmojiButtonProps> = ({
  initialEmoji,
  generateEmojisFunction,
  styles,
  onEmojiClick
}) => {
  const [showEmojis, setShowEmojis] = useState(false);
  const [currentEmoji, setCurrentEmoji] = useState(initialEmoji);

  const handleClick = () => {
    if (onEmojiClick) {
      onEmojiClick();
    }
    setCurrentEmoji(generateEmojisFunction());
    setShowEmojis(true);
    setTimeout(() => {
      setShowEmojis(false);
    }, 4800);
  };

  return (
    <div className={styles.container}>
      <button className={styles.emojiButton} onClick={handleClick}>
        {showEmojis ? currentEmoji : initialEmoji}
      </button>
    </div>
  );
};

export default EmojiButton;
