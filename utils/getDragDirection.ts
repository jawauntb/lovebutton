const getDragDirection = (event) => {
  const { clientX, clientY, movementX, movementY } = event;
  const xThreshold = 20;
  const yThreshold = 20;
  const xDiff = Math.abs(movementX);
  const yDiff = Math.abs(movementY);
  let direction = "";

  if (xDiff > xThreshold && xDiff >= yDiff) {
    direction = movementX > 0 ? "east" : "west";
  } else if (yDiff > yThreshold && yDiff >= xDiff) {
    direction = movementY > 0 ? "south" : "north";
  } else if (xDiff > xThreshold && yDiff > yThreshold) {
    if (movementX > 0 && movementY > 0) {
      direction = "southeast";
    } else if (movementX > 0 && movementY < 0) {
      direction = "northeast";
    } else if (movementX < 0 && movementY > 0) {
      direction = "southwest";
    } else {
      direction = "northwest";
    }
  }

  return direction;
};

export default getDragDirection

