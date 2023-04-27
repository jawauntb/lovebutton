function getRandomHeart(probability = 0.5, hearts) {
  const random = Math.random();
  return random < probability
    ? hearts[Math.floor(Math.random() * hearts.length)]
    : "💖";
}

export default getRandomHeart