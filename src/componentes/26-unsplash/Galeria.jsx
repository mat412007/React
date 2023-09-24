import '../../App.css';

import { useState } from 'react';
function Galeria() {
  const [url, setUrl] = useState('https://source.unsplash.com/random?landscape');
  const [busqueda, setBusqueda] = useState('landscape');
  function handleChange(event) {
    setBusqueda(event.target.value);
    setUrl('https://source.unsplash.com/random?'+event.target.value);
  }   
  const style = { 
    width: '200px',
    height: '200px',
    objectFit: 'cover' 
  };
  return (
    <>
    <div className='ColorDeTexto'>
      <h1>Galeria</h1>
      <input onChange={handleChange} value={busqueda} placeholder="¿Qué tipo de fotos querés?" type="text" style={{fontSize: 'large', width: '220px'}}/>
      <div className="galeria" style={{width:'100%'}}>  
        <img style={style} src={url+'&1'} />
        <img style={style} src={url+'&2'} />
        <img style={style} src={url+'&3'} />
        <img style={style} src={url+'&4'} />
        <img style={style} src={url+'&5'} />
        <img style={style} src={url+'&6'} />
      </div>
    </div>
    </>
  );
}

export default Galeria;