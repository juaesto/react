import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Usuarios from './components/Usuarios';
import Home from './components/Home';
import DetalleUsuario from './components/DetalleUsuario';
import React from "react";
import { Routes, Route } from "react-router-dom";

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
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/usuarios/:nombre" element={<DetalleUsuario />} />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
