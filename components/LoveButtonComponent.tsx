import React from 'react';
import styles from '../styles/Press.module.css';

const LoveButtonComponent = ({ pressed, handleClick, firstHeart }) => (
  <>
    <button
      className={`${styles.button} ${pressed ? styles.pressed : ''}`}
      onClick={handleClick}
      id="love-button"
    >
      <span className={styles.heart}>{firstHeart}</span>
    </button>
    <span className={styles.label}>Push for Love</span>
  </>
);

export default LoveButtonComponent;
