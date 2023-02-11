import React, { useState } from 'react';
import './App.css'
const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  const [operator, setOperator] = useState(null);

  const handleClear = () => {
    setDisplayValue('0');
    setFirstOperand(null);
    setWaitingForSecondOperand(false);
    setOperator(null);
  };

  const handleInputDigit = digit => {
    if (waitingForSecondOperand) {
      setDisplayValue(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(
        displayValue === '0' ? digit : `${displayValue}${digit}`
      );
    }
  };

  const handleOperator = newOperator => {
    const value = parseFloat(displayValue);

    if (firstOperand === null) {
      setFirstOperand(value);
    } else if (operator) {
      const result = performCalculation[operator](firstOperand, value);

      setDisplayValue(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(newOperator);
  };

  const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '=': (firstOperand, secondOperand) => secondOperand
  };

  return (
    <div id="calculator">
      <div className="output">
        <span id="result">{displayValue}</span>
      </div>
      <div className="buttons">
        <button id="clear" onClick={handleClear}>C</button>
        <button id="delete">&larr;</button>
        <button id="equals" onClick={() => handleOperator('=')}>=</button>
        <button id="divide" onClick={() => handleOperator('/')}>/</button>
        <button id="multiply" onClick={() => handleOperator('*')}>*</button>
        <button id="subtract" onClick={() => handleOperator('-')}>-</button>
        <button id="add" onClick={() => handleOperator('+')}>+</button>
        <button id="decimal">.</button>
        <button id="0" onClick={() => handleInputDigit(0)}>0</button>
        <button id="1" onClick={() => handleInputDigit(1)}>1</button>
        <button id="1" onClick={() => handleInputDigit(2)}>2</button>
        <button id="2" onClick={() => handleInputDigit(2)}>2</button>
        <button id="3" onClick={() => handleInputDigit(3)}>3</button>
        <button id="4" onClick={() => handleInputDigit(4)}>4</button>
        <button id="5" onClick={() => handleInputDigit(5)}>5</button>
        <button id="6" onClick={() => handleInputDigit(6)}>6</button>
        <button id="7" onClick={() => handleInputDigit(7)}>7</button>
        <button id="8" onClick={() => handleInputDigit(8)}>8</button>
        <button id="9" onClick={() => handleInputDigit(9)}>9</button>
      </div>
    </div>
  );
};

export default App;


