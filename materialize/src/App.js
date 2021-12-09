import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import "materialize-css/dist/js/materialize.min.js";
import MaterializeMediaBox from './components/MaterializeMediaBox/MaterializeMediaBox';

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
        <MaterializeMediaBox />
      </header>
    </div>
  );
}

export default App;
