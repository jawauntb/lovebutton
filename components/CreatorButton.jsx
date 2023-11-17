import React, { useState, useEffect } from 'react';
import styles from '../styles/Press.module.css';
import EmojiContainer from './EmojiContainer';
import getSpecialMessage from '../utils/getSpecialMessage';
import CentralEmojiButton from '../new_components/CentralEmojiButton';
import ButtonCreationInput from '../new_components/ButtonCreationInput';

const StyleInjector = ({ css }) => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.append(style);
    return () => {
      document.head.removeChild(style);
    };
  }, [css]);

  return null;
};

const CreatorButton = () => {
  const [showEmojis, setShowEmojis] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [firstButton, setFirstButton] = useState("👨🏾‍🎨")
  const [clickCount, setClickCount] = useState(0);
  const [emojis, setEmojis] = useState([])
  const [mainButtonClass, setMainButtonClass] = useState('float')
  const [createdButtons, setCreatedButtons] = useState([])
  const [createdEmojis, setCreatedEmojis] = useState([])
  const [buttonsEmojisAndAnimationsHaveBeenSet, setButtonsEmojisAndAnimationsHaveBeenSet] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [generatedCSS, setGeneratedCSS] = useState('');

  useEffect(() => {
    setMainButtonClass('buzzing-fly')
    setEmojis(generateEmojis())
  }, [clickCount]);

  const createdEmojiClass = () => `.created-animation{
      display: inline-block;
      position: relative;
      animation: created-anim 1s linear infinite;
      will-change: transform;
      top: -20px;
      left: -20px;
    }`

  const extractEmojis = (emojiResponse) => {
    // Remove the newline characters and split the string by comma and space
    const newEmojis = emojiResponse?.emojis.replace(/\n/g, '').split(', ').map(el => [...el]).map(em => `${em}`);
    const emList = [...newEmojis]
    return emList; // Remove any empty strings
  };

  const fetchRelatedEmojis = async (input) => {
    try {
      setIsLoading(true);
      const response = await fetch('https://emojipt-jawaunbrown.replit.app/emojis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input }),
      });

      const data = await response.json();
      const emojisToSet = extractEmojis(data)
      return emojisToSet || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const combinedPromptContent = ''

  function extractCSS(response) {
    const match = response.match(/```css([\s\S]*?)```/);
    return match ? match[1].trim() : '';
  }

  const fetchAnimationData = async (input) => {
    const rawContent = await makeAPIRequest({
      model: "gpt-4-1106-preview",
      messages: [
        { role: "system", content: `You are an css animation expert that designs beautiful emoji reactions where the animation reflects the emoji reactions using pure css` },
        { role: "user", content: `return an animation keyframe in pure css, nothing else, the animation should enact something related to the description here: ${input} name the animation 'created-anim'` }
      ]
    });

    const extractedContent = extractCSS(rawContent).replace(/\\/g, '');
    return extractedContent | "";
  };

  async function makeAPIRequest(payload) {
    try {

      const response = await fetch('https://emojipt-jawaunbrown.replit.app/sitesee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ payload })
      });

      const data = await response.json();
      if (data && data.choices && data.choices.length > 0) {
        return data.choices[0].message.content;
      } else {
        console.error('Unexpected API response:', data);
        return '';
      }
    } catch (error) {
      console.error('Error processing section:', error);
    } // End of try-catch block
  }

  const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
  };

  const getRandomButton = (probability = 0.5) => {
    const random = Math.random();
    const otherRandom = Math.random();
    const x = Math.floor(otherRandom * createdButtons.length)
    const nextButton = createdButtons[x]
    return random < probability
      ? nextButton
      : "👨🏾‍🎨";
  }

  const handleButtonClick = () => {
    setFirstButton(getRandomButton());
    setShowEmojis(true);
    setPressed(true);
    setClickCount(clickCount + 1);
    // TODO implement this setting behavior and other setters
    setMainButtonClass()
    setTimeout(() => {
      setPressed(false);
      setShowEmojis(false);
    }, 10000)
  };

  const createEmojiResult = (emojiList) => {
    const result = emojiList.map((emoji) => {
      const count = getRandomNumber(25)
      const emojiCountArray = Array(Math.floor(count))
      return emojiCountArray.fill(emoji)
    }).reduce((result, currEmojiSubArray) => [...result, ...currEmojiSubArray], []);
    return result;
  };

  const handleCreationButtonSubmit = async (inputText) => {
    // Set loading to true
    setIsLoading(true);

    // Fetch related emojis and animations
    const relatedEmojis = await fetchRelatedEmojis(inputText);
    // Once data is fetched, set the states accordingly
    setCreatedEmojis(relatedEmojis);
    setFirstButton(relatedEmojis[0])

    const animationData = await fetchAnimationData(inputText);
    const css = animationData + '/n' + createdEmojiClass()
    setGeneratedCSS(css)
    setButtonsEmojisAndAnimationsHaveBeenSet(true);

    // Set loading to false
    setIsLoading(false);
  };
  const messages = ''

  const generateEmojis = () => {
    const result = createEmojiResult(createdEmojis);
    console.log('result', result)
    const countEmoji = "➕" + clickCount.toString();
    const specialMessage = getSpecialMessage(clickCount, messages);
    return specialMessage ? [specialMessage, countEmoji, ...result] : [countEmoji, ...result];
  };

  return (
    <div className={styles.dopecontainer}>
      {generatedCSS && <StyleInjector css={generatedCSS} />}
      {
        buttonsEmojisAndAnimationsHaveBeenSet && generatedCSS &&
        <>
          <CentralEmojiButton
            pressed={pressed}
            handleClick={handleButtonClick}
            emoji={firstButton}
            id="main-button"
            emojiClass={`${mainButtonClass}`}
          />
          {showEmojis && generatedCSS && <div className={styles.emojiContainer}>
            {emojis.map((emoji, index) => (
              <span
                key={index}
                className={'created-animation'}
                style={{
                  animation: `created-anim 1s linear infinite`,
                  animationDelay: `${index * 0.01}s`,
                  fontSize: `${Math.floor(Math.random() * 5) + 3}rem`,
                  left: `${Math.floor(Math.random() * 90)}%`,
                  top: `${Math.floor(Math.random() * 50)}%`,
                  transform: `rotate(${Math.floor(Math.random() * 1080)}deg)`,
                }}
              >
                {emoji}
              </span>
            ))}
          </div>}
        </>
      }
      {!buttonsEmojisAndAnimationsHaveBeenSet &&
        <ButtonCreationInput onSubmit={handleCreationButtonSubmit} isLoading={isLoading} />}
    </div>
  );
};

export default CreatorButton;
