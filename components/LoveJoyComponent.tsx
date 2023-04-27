import React from 'react';
import styles from '../styles/Press.module.css';

const LoveJoyComponent = ({ pressed, handleClick, firstHeart, handleDrag }) => {
  const handleMouseDown = (event) => {
    event.preventDefault();
    window.addEventListener('mousemove', handleDrag);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleDrag);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <>
      <button
        className={`${styles.button} ${pressed ? styles.pressed : ''}`}
        onMouseDown={handleMouseDown}
        id="love-button"
      >
        <span className={styles.heart}>{firstHeart}</span>
      </button>
      <span className={styles.label}>Pull to Love</span>
    </>
  );
};

export default LoveJoyComponent;
