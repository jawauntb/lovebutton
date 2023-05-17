import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

const RingComponent = ({ emojis, speed, size, displayMode }) => {
  const emojiArray = Array.from(emojis);
  const containerRef = useRef(null);

  const { transform } = useSpring({
    from: { transform: 'rotate(0deg)' },
    to: { transform: `rotate(${360 * speed}deg)` },
    config: { duration: 3000 },
    reset: true,
    loop: true,
  });

  useEffect(() => {
    function positionEmojis() {
      if (containerRef.current && displayMode === 'circle') {
        const { width, height } = containerRef.current.getBoundingClientRect();
        const radius = Math.min(width, height) / 2 * size; // Multiply radius by size
        const angleStep = (2 * Math.PI) / emojiArray.length;
        let angle = 0;

        Array.from(containerRef.current.children).forEach((child, i) => {
          const x = width / 2 + radius * Math.cos(angle) - child.offsetWidth / 2;
          const y = height / 2 + radius * Math.sin(angle) - child.offsetHeight / 2;

          child.style.position = 'absolute';
          child.style.left = `${x}px`;
          child.style.top = `${y}px`;

          angle += angleStep;
        });
      }
    }

    positionEmojis();

    const resizeObserver = new ResizeObserver(positionEmojis);
    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [emojiArray, displayMode]);

  const renderEmojis = () => {
    return emojiArray.map((emoji, index) => (
      <animated.div
        key={index}
        style={{ position: 'absolute', fontSize: `${size}em` }}
      >
        {emoji}
      </animated.div>
    ));
  };

  return (
    <animated.div ref={containerRef} style={{ position: 'relative', width: '100%', height: '100%', transform: displayMode === 'circle' ? transform : 'none' }}>
      {renderEmojis()}
    </animated.div>
  );
};

export default RingComponent;
