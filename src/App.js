import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Libreta Invisible
        </p>
      </header>
      <menubar >
        <button style={{marginRight: "20px"}}>Agregar</button>
        <input 
          type="text"
          placeholder="buscar notas..."
          className="buscar" style={{marginRight: "20px"}}></input>
        <button>Filtrar</button>
      </menubar>
    </div>
  );
}

export default App;
