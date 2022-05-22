import 'materialize-css/dist/css/materialize.min.css';
import "materialize-css/dist/js/materialize.min.js";
import './App.css';
import TaskForm from './components/TaskForm/TaskForm';

function App() {
  return (
    <div className="App">
      <TaskForm />
    </div>
  );
}

export default App;
