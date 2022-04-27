import React from 'react';
import logo from './logo.svg';
import './App.css';
import Component1 from './components/Component1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Component1 prop1='Hola' prop2={2} prop3={false} />
      </header>
    </div>
  );
}

export default App;
