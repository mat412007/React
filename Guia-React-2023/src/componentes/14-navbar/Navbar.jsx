import { useEffect } from 'react';
import '../../App.css';

function Navbar(props) {
  console.log(props.links);
  useEffect(() => {
    alert('ya cargue el componente!');
  }, []);
  return (
    <nav className='ColorDeTexto'>
      <h2>Barra de navegacion</h2>
      <ul>
        {props.links.map((link, i) => {
          return (
            <li key={i}>
              <a href={link.url}>{link.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;