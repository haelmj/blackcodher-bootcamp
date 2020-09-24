import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  // const h1Style = {"fontSize":"30px", "color":"#000000"};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 
        // style={h1Style} 
        className = "testHeader">
          Learning React by creating our own mini application
        </h1>
      </header>
    </div>
  );
}

export default App;
