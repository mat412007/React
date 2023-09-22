import { useState } from 'react';
import '../../App.css';

function Contador(props) {

  let [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks(clicks + 1); // esto se ejecuta de manera asincrona
    // console.log(clicks);
  }

  return (
    <>
      <div className='ColorDeTexto'>
        <h2 cla>El ejemplo mas simple posible de <code>useState</code></h2>
        <h1>{clicks}</h1> 
      </div> 
      <button onClick={handleClick}>Contar</button>
    </>
  );  
}

export default Contador;