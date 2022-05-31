import React, { useState } from 'react';
import './App.css';
import { Buscador } from './components/Buscador';
import { ResultadosTable } from './components/ResultadosTable';
import logo from './logo.svg';
import buscadorService from './services/BuscadorService';

function App() {
  const [data, setData] = useState();
  
  const handleChangeCountry = async (country: string) => {    
    await buscadorService.get(country).then(res => {
      setData(res.data);  
    });
  }

  // Si no tenemos datos, no renderizamos el componente
  let resultadosTable;
  if (data) {
    resultadosTable = <ResultadosTable data={data} />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Buscador onChangeCountry={handleChangeCountry} />
        {resultadosTable}
      </header>
    </div>
  );
}

export default App;
