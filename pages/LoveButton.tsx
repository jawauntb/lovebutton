import React, { useState, useRef } from "react";
import styles from "../styles/Press.module.css";
import emojigram from "./emojigram";
import html2canvas from "html2canvas";
import RecordRTC from "recordrtc";
import Image from "next/image";

const LoveButton = () => {
  const [showEmojis, setShowEmojis] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [firstHeart, setFirstHeart] = useState("💖");
  const [isRecording, setIsRecording] = useState(false);
  const [media, setMedia] = useState(null);
  const containerRef = useRef(null);

  const handleClick = () => {
    setShowEmojis(true);
    setPressed(true);
    setTimeout(() => {
      setShowEmojis(false);
      setPressed(false);
      setFirstHeart(Math.random() > .25 ? getRandomHeart() : "💘")
    }, 1700);
  };

  function getRandomHeart(probability = 0.5) {
    const hearts = [
      "💞",
      "💝",
      "❣️",
      "💕",
      "💖",
      "🕯️",
      "🕊️",
      "💗",
      "😈",
      "😩",
      "💘",
      "🌊💝",
      "💔",
      "∞",
      "∞ + ♾️",
      "♾️",
      "🫠",
      "🪷",
      "𑁍",
      "👨‍👩‍👧‍👦",
      "🫶🏾",
      "🤍",
      "🌺",
      "🕰️",
      "💞",
      "💌",
      "💍",
    ];
    const random = Math.random();
    return random < probability
      ? hearts[Math.floor(Math.random() * hearts.length)]
      : "💖";
  }

  const generateEmojis = () => {
    const result: any[] = [];
    Object.entries(emojigram).map(([emoji, number]) => {
      for (let i = 0; i < number; i++) {
        result.push(emoji);
      }
    });
    return result;
  };

  const captureMedia = async (type: any) => {
    if (type === "image") {
      const canvas = await html2canvas(containerRef.current);
      setMedia(canvas.toDataURL("image/png"));
    } else if (type === "video") {
      setIsRecording(true);

      const hiddenCanvas = document.getElementById("hiddenCanvas") as HTMLCanvasElement;
      const ctx = hiddenCanvas.getContext("2d");

      const recordVideo = async () => {
        const canvas = await html2canvas(containerRef.current);
        ctx.drawImage(canvas, 0, 0);

        if (isRecording) {
          requestAnimationFrame(recordVideo);
        }
      };

      await recordVideo();

      const canvasStream = hiddenCanvas.captureStream();
      const recorder = new RecordRTC(canvasStream, { type: "video" });
      recorder.startRecording();

      setTimeout(async () => {
        setIsRecording(false);
        recorder.stopRecording(() => {
          const blob = recorder.getBlob();
          setMedia(URL.createObjectURL(blob));
        });
      }, 10000); // Adjust recording duration as needed
    }
  };


  const emojis = generateEmojis();
  const first = Math.random();

  return (
    <div className={styles.container} ref={containerRef}>
      <canvas id="hiddenCanvas" style={{ display: "none" }}></canvas>
      <button
        className={`${styles.button} ${pressed ? styles.pressed : ""}`}
        onClick={handleClick}
      >
        <span className={styles.heart}>{firstHeart}</span>
        <span className={styles.label}>Press for Love</span>
      </button>
      {showEmojis && (
        <div className={styles.emojiContainer}>
          {emojis.map((emoji, index) => (
            <span
              key={index}
              className={styles.emoji}
              style={{
                animationDelay: `${index * 0.01}s`,
                fontSize: `${Math.floor(Math.random() * 5) + 3}rem`,
                left: `${Math.floor(Math.random() * 150)}%`,
                top: `${Math.floor(Math.random() * 100)}%`,
                transform: `rotate(${Math.floor(Math.random() * 1080)}deg)`,
              }}
            >
              {emoji}
            </span>
          ))}
        </div>
      )}
      <div className={styles.saveContainer}>
        <button className={styles.savebuttons} onClick={() => captureMedia("image")}>Save as Image</button>
        <button className={styles.button} onClick={() => captureMedia("video")}>Save as Video/GIF</button>
        {media && (
          <div>
            <h3>Preview:</h3>
            {media.includes("image") ? (
              <Image src={media} alt="Captured Media" layout="responsive" width={100} height={100} />
            ) : (
              <video src={media} controls></video>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoveButton;

