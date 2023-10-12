import styles from '../styles/Press.module.css';

export type ButtonConfig = {
  route: string;
  title: string;
  content: string;
  className?: string;
};

export const buttonConfigs: { [key: string]: ButtonConfig } = {
  "Wave": {
    route: "/wave",
    title: "Go to Wave",
    content: "🌊",
    className: styles.waveButton
  },
  "Index": {
    route: "/",
    title: "Go to Index",
    content: "💖",
    className: styles.indexButton // assuming this exists
  },
  "Grow": {
    route: "/grow",
    title: "Go to Grow",
    content: "🪷",
    className: styles.growButton
  },
  "Dems": {
    route: "/demoiselles",
    title: "Go to Demoiselles",
    content: "👹",
    className: styles.demsButton // assuming this exists
  },
  "Rings": {
    route: "/rings",
    title: "Go to Resonance",
    content: "⭕️",
    className: styles.ringButton
  },
  // ... add more buttons as needed
};

export const generateButtons = (keys: string[]): ButtonConfig[] => {
  return keys.map(key => {
    const config = buttonConfigs[key];
    return config;
  }).filter(Boolean); // filter out any null values
};
