import React, { useState, useEffect } from 'react';
// Move this outside the component to make it a static reference
const textArray = ["Web Developer..!","CSE Graduate..!","a Curious Mind..!"];

const TypingEffect = () => {
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const delayBeforeErase = isDeleting ? 50 : 1000;

    const handleTyping = () => {
      if (!isDeleting && charIndex < textArray[index].length) {
        setText((prev) => prev + textArray[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (!isDeleting && charIndex === textArray[index].length) {
        setTimeout(() => setIsDeleting(true), delayBeforeErase);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % textArray.length);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [charIndex, isDeleting, index]); // Removed textArray from here

  return <span className="typing-text text-info">{text}</span>;
};

export default TypingEffect;
