import './App.css'
import { useState } from 'react'

function App(){

  const[publicacion, setPublicacion] = useState('')
  const[publicaciones, setPublicaciones] = useState([])
  const[nombre, setNombre] = useState('')
  const[titulo, setTitulo] = useState('')


  function nombreCambio(e){
    setNombre(e.target.value)
  }

  function tituloCambio(e){
    setTitulo(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    setPublicaciones([...publicaciones, publicacion])
    setPublicacion('')
  }

  function handleChange(e){
    setPublicacion(e.target.value)
  }

  function deleteTarea(e) {
    let id = +e.target.parentElement.id; /*El + hace exactamente lo mismo que parseInt()*/
    console.log(id);
    console.log(publicaciones);
    let nuevasPublicaciones = publicaciones.filter((publicacion, indice) => {
      console.log(indice,id)
      if (indice !== id) {
        return publicacion;
      }else{
        return null;
      }
    });
    console.log(nuevasPublicaciones);
    setPublicaciones(nuevasPublicaciones);
  }

  const estiloPublicacion = {
    border: '2px solid black',
    sizeAdjust: 'auto',
    maxWidth: '400px'
  }

  return(
    <>
      <h1 style={{color: 'black'}}><u>Blog</u></h1>
      <form  onSubmit={handleSubmit}>
        <input type="text" id="autor" placeholder='Ingrese su nombre' value={nombre} onChange={nombreCambio} /><br /><br />
        <input type="text" id="titulo" placeholder='Ingrese el titulo' value={titulo} onChange={tituloCambio} /><br /><br />
        <label htmlFor='publicacion'>Inserte su publicación</label><br />
        <textarea id="publicacion" cols="30" rows="7" value={publicacion} onChange={handleChange}></textarea><br />
        <input type="submit" value="Publicar"/>
      </form>
      <ol>
      {
      publicaciones.map((p,idx) => 
      <li id={idx} key={idx}>
        <h3>{nombre}</h3>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div style={estiloPublicacion}>{p}</div>
          <p style={{marginLeft: '10px'}}>Autor: {titulo}</p>
        </div>
        <input type="button" value="Eliminar" onClick={deleteTarea} style={{marginTop: '10px'}} /> 
        <br /><br />
      </li>)
      } 
      </ol>
    </>
  )
}

export default App


