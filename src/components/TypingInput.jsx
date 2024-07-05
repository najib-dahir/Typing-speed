import React from 'react';

const TypingInput = ({ userInput, setUserInput, setIsRunning }) => {
  const handleChange = (e) => {
    if (e.target.value.length === 1 && !userInput) {
      setIsRunning(true);
    }
    setUserInput(e.target.value);
  };

  return (
    <textarea
      className="w-full p-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={userInput}
      onChange={handleChange}
      placeholder="Start typing..."
    />
  );
};

export default TypingInput;
