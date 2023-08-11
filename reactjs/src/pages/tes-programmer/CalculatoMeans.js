import React, { useState } from 'react';

function AverageCalculator() {
  const [inputValues, setInputValues] = useState('');
  const [average, setAverage] = useState('');

  const calculateAverage = () => {
    const values = inputValues.split(',').map(value => parseFloat(value.trim()));
    const sum = values.reduce((total, value) => total + value, 0);
    const calculatedAverage = sum / values.length;

    setAverage(calculatedAverage.toFixed(2));
  };

  return (
    <div className='container'>
      <h2>Average Calculator</h2>
      <textarea
        value={inputValues}
        onChange={(e) => setInputValues(e.target.value)}
        placeholder="Masukin angka yang mau dihitung rata-ratanya, pisahkan dengan koma (,) "
      />
      <button onClick={calculateAverage}>Calculate Average</button>
      {average && <p>Average: {average}</p>}
    </div>
  );
}

export default AverageCalculator;