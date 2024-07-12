import React, { useEffect, useState } from 'react';
import TextDisplay from './TextDisplay';
import TypingInput from './TypingInput';
import Timer from './Timer';
import Results from './Results';

function TypingSpeed() {
  const [text] = useState('This is a sample text for typing speed test.');
  const [userInput, setUserInput] = useState('');
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState(null);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const startTest = () => {
    setIsRunning(true);
    setUserInput('');
    setTime(0);
    setResults(null);
  };

  const endTest = () => {
    setIsRunning(false);
    const words = userInput.trim().split(' ').length;
    const correctChars = text.split('').reduce((acc, char, index) => {
      return acc + (char === userInput[index] ? 1 : 0);
    }, 0);
    const wpm = (words / time) * 60;
    const accuracy = (correctChars / text.length) * 100;
    setResults({ wpm, accuracy });
  };

  return (
    <div className="App flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Typing Speed Test</h1>
        <TextDisplay text={text} userInput={userInput} />
        <TypingInput userInput={userInput} setUserInput={setUserInput} setIsRunning={setIsRunning} />
        <Timer time={time} />
        <div className="flex space-x-2 mt-4 justify-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={startTest}>Start</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={endTest}>End</button>
        </div>
        {results && <Results results={results} />}
      </div>
    </div>
  );
}

export default TypingSpeed;
