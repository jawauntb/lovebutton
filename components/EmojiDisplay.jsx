import React, { useState } from 'react';

const EmojiDisplay = ({ heartEmoji, emojigram }) => {
  const [displayHeart, setDisplayHeart] = useState(false);

  const toggleHeart = () => {
    setDisplayHeart(!displayHeart);
  };

  return (
    <div className="emoji-display">
      <div className="emojigram">
        {emojigram.map(({ emoji, weight }, index) => (
          <span key={index} style={{ fontSize: `${weight}px` }}>
            {emoji}
          </span>
        ))}
      </div>
      {displayHeart && <div className="heart">{heartEmoji}</div>}
      <button onClick={toggleHeart} className="love-button">
        {displayHeart ? 'Hide Love' : 'Show Love'}
      </button>
    </div>
  );
};

export default EmojiDisplay;
