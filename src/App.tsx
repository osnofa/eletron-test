import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <span>counter: {counter}</span>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default App;
