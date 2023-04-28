import React from "react";
import dynamic from "next/dynamic";
import { Joystick } from "react-joystick";

const JoystickComponent = ({ onDrag, onRelease }) => {
  const handleMove = (e) => {
    onDrag(e.direction);
  };

  const handleStop = () => {
    onRelease();
  };

  return (
    <div>
      <Joystick
        move={handleMove}
        stop={handleStop}
      />
    </div>
  );
};

export default JoystickComponent;
