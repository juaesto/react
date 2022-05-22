import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import "materialize-css/dist/js/materialize.min.js";
import './App.css';
import Login from "./components/Login";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login />} />
        <Route path="/tasks" element={<TaskForm />} />
      </Routes>
    </div>
  );
}

export default App;
