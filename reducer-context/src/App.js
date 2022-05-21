import logo from './logo.svg';
import './App.css';
import { TasksProvider } from './context/TasksContext';
import AddTask from './components/AddTasks';
import TaskList from './components/TaskList';

const initialTasks = [
  { id: 0, text: 'Poner gasolina', done: true },
  { id: 1, text: 'Preparar comida', done: false },
  { id: 2, text: 'Planchar ropa', done: false }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <TasksProvider initialTasks={initialTasks}>
            <h1>Tareas diarias</h1>
            <AddTask />
            <TaskList />
          </TasksProvider>
        </div>
      </header>
    </div>
  );
}

export default App;
