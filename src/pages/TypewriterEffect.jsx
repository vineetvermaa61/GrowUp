import React, { useState, useEffect } from "react";

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100); // Adjust speed here

    return () => clearInterval(intervalId);
  }, [text]);

  return <div>{displayText}</div>;
};

export default TypewriterEffect;
