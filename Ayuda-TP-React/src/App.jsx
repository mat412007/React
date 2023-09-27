import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [cosas, setCosas] = useState([]);
  const [nuevaCosa, setNuevaCosa] = useState('');
  {/*Para resetear el array cosas, accedes desde Ctrl + Mayus + c hasta Application, a localStorage, click derecho, y delete*/}

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
      <h1 style={{color: 'Black'}}><u>Nuevo</u></h1>  
      <form onSubmit={handleSubmit}>
        <input 
          value={nuevaCosa}
          onChange={e => setNuevaCosa(e.target.value)}
          type="text"
          style={{fontSize: '16px'}}
        />
        <input 
          type="submit"
          value="Agregar"
          style={{fontSize: '16px'}}
        />
      </form>
      <pre style={{fontSize: '17px'}}>[
        {cosas.map((c,i) => <span key={i}> {c} </span>)}
      ]</pre>
      <a href="/lista" style={{fontSize: '16px'}}>Ir a pagina de lista</a>
    </div>
  );
}

export default App
