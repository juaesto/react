import React from 'react';
import './App.css';
import RecetaPizza from './components/RecetaPizza';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RecetaPizza />
      </header>
    </div>
  );
}

export default App;
