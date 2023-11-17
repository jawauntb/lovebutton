import React, { useState } from 'react';
import styles from '../styles/Press.module.css';


const ButtonCreationInput = ({ onSubmit, isLoading }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      onSubmit(inputValue.trim());
    }
  };



  return (
    <div className={`${styles.button}`}>
      <input
        className= "creator-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Type in your emoji button idea"
        disabled={isLoading}
      />
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default ButtonCreationInput;
