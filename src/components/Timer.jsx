import React from 'react';

const Timer = ({ time }) => {
  return (
    <div className="timer">
      <p>Time: {time} seconds</p>
    </div>
  );
};

export default Timer;
