import React from 'react';

const TextDisplay = ({ text, userInput }) => {
  const renderedText = text.split('').map((char, index) => {
    let className = 'text-black';
    if (index < userInput.length) {
      className = char === userInput[index] ? 'text-green-500' : 'text-red-500';
    }
    return (
      <span key={index} className={className}>
        {char}
      </span>
    );
  });

  return (
    <div className="text-display mb-4 text-lg">
      {renderedText}
    </div>
  );
};

export default TextDisplay;
