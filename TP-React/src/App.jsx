import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [cosas, setCosas] = useState([]);
  const [nuevaCosa, setNuevaCosa] = useState('');

  useEffect(() => {
    let cosasGuardadas = JSON.parse(localStorage.getItem('cosas'));
    if (cosasGuardadas) setCosas(cosasGuardadas);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    let cosasActualizadas = [...cosas, nuevaCosa];
    setCosas(cosasActualizadas);
    localStorage.setItem('cosas', JSON.stringify(cosasActualizadas));
    setNuevaCosa('');
  }

  return (
    <div className="App">
      <h1>Nuevo</h1>  
      <form onSubmit={handleSubmit}>
        <input 
          value={nuevaCosa}
          onChange={e => setNuevaCosa(e.target.value)}
          type="text"
        />
        <input 
          type="submit"
          value="Agregar"
        />
      </form>
      <pre>[
        {cosas.map((c,i) => <span key={i}> {c} </span>)}
      ]</pre>
      <a href="/lista">Ir a pagina de lista</a>
    </div>
  );
}

export default App
