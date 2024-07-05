import React from 'react';

const Results = ({ results }) => {
  return (
    <div className="results mt-4 text-xl text-gray-800">
      <p>WPM: {results.wpm.toFixed(2)}</p>
      <p>Accuracy: {results.accuracy.toFixed(2)}%</p>
    </div>
  );
};

export default Results;
