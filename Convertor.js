// Converter.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Converter = () => {
  const [eurValue, setEurValue] = useState(0);
  const [usdValue, setUsdValue] = useState(0);
  const [rate, setRate] = useState(1);

  useEffect(() => {
    axios.get('/rate').then(response => {
      setRate(response.data.rate);
    });
  }, []);

  const handleEurChange = (event) => {
    const value = event.target.value;
    setEurValue(value);
    setUsdValue(value * rate);
  }

  const handleUsdChange = (event) => {
    const value = event.target.value;
    setUsdValue(value);
    setEurValue(value / rate);
  }

  return (
    <div>
      <label>
        EUR:
        <input type="number" value={eurValue} onChange={handleEurChange} />
      </label>
      <br />
      <label>
        USD:
        <input type="number" value={usdValue} onChange={handleUsdChange} />
      </label>
    </div>
  );
}

export default Converter;