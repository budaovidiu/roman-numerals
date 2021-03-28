import React, { useState } from 'react';
import './App.css';
import CommandCenter from './components/CommandCenter/CommandCenter';
import OutputText from './components/OutputText/OutputText';

const App = () => {
  const [converted, setConverted] = useState({})

  const handleConversion = (value) => {
    setConverted(value)
  }

  return (
    <div className="container">
      <CommandCenter convert={handleConversion}></CommandCenter>
      <OutputText digits={converted.transformed} error={converted.error}></OutputText>
    </div>
  );
}

export default App;
