import styles from '../styles/Press.module.css';

export type ButtonConfig = {
  route: string;
  title: string;
  content: string;
  className?: string;
  container?: string;
};

export const buttonConfigs: { [key: string]: ButtonConfig } = {
  "Wave": {
    route: "/wave",
    title: "Go to Wave",
    content: "🌊",
    className: styles.waveButton,
    container: 'aquacontainer'
  },
  "Index": {
    route: "/",
    title: "Go to Index",
    content: "💖",
    className: styles.indexButton, // assuming this exists
    container: 'container'
  },
  "Grow": {
    route: "/grow",
    title: "Go to Grow",
    content: "🪷",
    className: styles.growButton,
    container: 'growcontainer'
  },
  "Dems": {
    route: "/demoiselles",
    title: "Go to Demoiselles",
    content: "👹",
    className: styles.demsButton, // assuming this exists
    container: 'demscontainer'
  },
  "Rings": {
    route: "/rings",
    title: "Go to Resonance",
    content: "⭕️",
    className: styles.ringButton,
    container: 'ringscontainer'
  },
  "Dope": {
    route: "/dope",
    title: "Go to Dopamine",
    content: "🍬",
    className: styles.dopeButton,
    container: 'dopecontainer'
  },
  // ... add more buttons as needed
};

export const generateButtons = (keys: string[]): ButtonConfig[] => {
  return keys.map(key => {
    const config = buttonConfigs[key];
    return config;
  }).filter(Boolean); // filter out any null values
};
