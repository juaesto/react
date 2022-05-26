import logo from './logo.svg';
import './App.css';
import Incremento from './components/Incremento';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Incremento />
      </header>
    </div>
  );
}

export default App;
