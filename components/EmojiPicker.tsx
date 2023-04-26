import React, { useState } from 'react';

const EmojiPicker = ({ onHeartEmojiChange, onEmojigramChange }) => {
  const [emoji, setEmoji] = useState('');
  const [weight, setWeight] = useState(30);

  const handleEmojiChange = (e) => {
    setEmoji(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEmojigramChange((prevEmojigram) => [...prevEmojigram, { emoji, weight }]);
  };

  const handleHeartEmojiChange = (e) => {
    onHeartEmojiChange(e.target.value);
  };

  return (
    <div className="emoji-picker">
      <form onSubmit={handleSubmit}>
        <label>
          Emoji:
          <input type="text" value={emoji} onChange={handleEmojiChange} />
        </label>
        <label>
          Weight:
          <input
            type="number"
            value={weight}
            onChange={handleWeightChange}
          />
        </label>
        <button type="submit">Add Emoji</button>
      </form>
      <label>
        Heart Emoji:
        <input type="text" onChange={handleHeartEmojiChange} />
      </label>
    </div>
  );
};

export default EmojiPicker;
