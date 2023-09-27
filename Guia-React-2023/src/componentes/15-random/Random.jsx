import { useState } from 'react';

function Random(props) {
  
  const [number, setNumber] = useState(0);

  function generateNumbersAtRandom() {
    const random = Math.floor(Math.random() * 1000) + 1;
    setNumber(random);
  }  

  return (
    <h1 className='ColorDeTexto' onClick={generateNumbersAtRandom}>{number}</h1>
  );  
}

export default Random;