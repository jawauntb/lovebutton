const handleGrowShareClick = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "🌴🌼 Will You Grow with Me? 🪴🌺",
        url: window.location.href,
      });
    } catch (err) {
      console.error("Failed to share: ", err);
    }
  } else {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("URL copied to clipboard! Share it with your friends 🚀");
    } catch (err) {
      console.error("Failed to copy URL: ", err);
    }
  }
};

export default handleGrowShareClick;