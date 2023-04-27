const getSpecialMessage = (clickCount, messages) => {  
  for (const { limit, interval, divisor, message } of messages) {
    if (clickCount == 1){
      return "Love💘 Is🪷 The♾️ Universal🪐 Interface⎚"
    }
    if ((clickCount > 1 && clickCount >= limit && clickCount % interval === 0) && (!divisor || clickCount % divisor === 0)) {
      return message;
    }
  }

  return null;
};

export default getSpecialMessage
