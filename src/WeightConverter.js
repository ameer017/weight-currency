import React, { useState, useEffect } from 'react';
import './index.css'
const WeightToCurrencyConverter = () => {
  const [weight, setWeight] = useState(0);
  const [conversionRate, setConversionRate] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    // Fetch conversion rate from the API using your API key
    const apiKey = '14b716abbf794520a95117eb4d4fd6f8';
    const currencyCode = 'USD'; // Convert to US Dollars
    fetch(`https://openexchangerates.org/api/latest.json?app_id=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        if (data.rates) {
          setConversionRate(data.rates[currencyCode]);
        }
      });
  }, []);

  const handleWeightChange = event => {
    const newWeight = parseFloat(event.target.value);
    setWeight(newWeight);
    setConvertedAmount(newWeight * conversionRate); // Calculate the converted amount
  };
  

  return (
    <div className='App'>
      <h1>Weight to Currency Converter</h1>
      <label>Enter weight in lbs:</label>
      <input type="number" value={weight} onChange={handleWeightChange} />
      <p>Converted amount in USD: {convertedAmount}</p>
    </div>
  );
};

export default WeightToCurrencyConverter;
