import logo from './logo.svg';
import './App.css';
import PersonList from './components/PersonList';
import PersonForm from './components/PersonForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ display: "table" }}>
          <div style={{ display: "table-cell", paddingRight: "30px" }}>
            <h2>PERSON LIST COMPONENT</h2>
            <PersonList />
          </div>
          <div style={{ display: "table-cell" }}>
            <h2>PERSON FORM COMPONENT</h2>
            <PersonForm />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
