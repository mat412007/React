import { useState } from 'react';
import '../../App.css';

function Futbol() {
  const equipos = [
    'Newells', 
    'Independiente',
    'Estudiantes',
    'Argentinos Jrs', 
    'San Lorenzo',
    'Zaracho FC',
    'Jorge Newbery',
    'Racing',
    'Racing de Cordoba',
    'Estudiantes de Caseros',
    'Independiente del Valle',
    'Almagro',
    'Zaracho FC Filial Asuncion'
  ];

  const [busqueda, setBusqueda] = useState('');
  const [lista, setLista] = useState(equipos);
  
  const handleChange = e => {
    // console.log(e.target);
    setBusqueda(e.target.value); // componentes controlados
    let array = equipos.filter(cosa => {
      let s1 = cosa.toLowerCase();
      let s2 = e.target.value.toLowerCase();
      if (s1.startsWith(s2)) return s1;
      else                   return null;
    });
    setLista(array);
  };


  return (
    <>
      <div className='ColorDeTexto'>
        <h2>Filtrá usando este input</h2>
          <input 
            type="text"
            value={busqueda}
            onChange={handleChange}
            style={{fontSize: '18px'}}
          />
          <ul className='Lista-de-Equipos'>
            {lista.map(equipo => <li key={equipo}>{equipo}</li>)}
          </ul>
      </div>
    </>
  );
}

export default Futbol;