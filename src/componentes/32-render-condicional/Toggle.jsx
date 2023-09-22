import { useState } from 'react';
const Toggle = props => {
  const [show, setShow] = useState(false);
  const handleClick = e => {
    // console.log(show && 'cosa');  
    setShow(!show);

  };  
  return (
    <>
      <button onClick={handleClick}>
        {show ? 'Ocultar' : 'Mostrar'}
      </button>
      <div className='ColorDeTexto'>
        {show && <h1>Alguna cosa que se puede ocultar</h1>}
      </div>
    </>
  );
};

export default Toggle;