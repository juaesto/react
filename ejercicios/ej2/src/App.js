import logo from './logo.svg';
import './App.css';
import Saludos from './components/Saludos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Saludos nombre="Pedro2" />
        <Saludos nombre="Marta4aaaaa" />
        <Saludos nombre="Juan" />
      </header>
    </div>
  );
}

export default App;
