const handleHeartClick = () => {
  setShowEmojis(true);
  setPressed(true);
  setClickCount(clickCount + 1);
  setTimeout(() => {
    setShowEmojis(false);
    setPressed(false);
    setFirstHeart(Math.random() > 0.25 ? getRandomHeart(hearts) : "💘");
  }, 6000);
};

export default handleHeartClick