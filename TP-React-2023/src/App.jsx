import './App.css'

function App(){

  const[publicaciones, setPublicaciones] = useState([])

  function handleSubmit(){
    setPublicaciones(...publicaciones, )
  }

  return(
    <>
      <h1 style={{color: 'black', marginTop: '5px'}}><u>Blog</u></h1>
      <form>
        <label for='publicacion'>Inserte su publicacin</label><br />
        <textarea id="publicacion" cols="30" rows="7"></textarea><br />
        <input type="submit" value="Publicar" onSubmit={handleSubmit}/>
      </form>
    </>
  )
}

export default App


