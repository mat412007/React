// el primer input es usuario
// el segundo es password
// cuando envias el form mostrar un alert con 
// user y pass
// los componentes del form deben ser componentes
// controlados
import { useState } from 'react';
import '../../App.css';

function Unform(props) {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  function handleUserChange(event) {
    setUser(event.target.value);
  }

  function handlePassChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();  // no refresh
    console.log('hola enviado');
    alert(user + ' ' + password);  // el alert
    console.log(user + ' ' + password);
    setUser('');
    setPassword('');         // blanquear form
  }

  const style = {
    fontSize: 'medium',
    color: 'black'
  };

  return (
    <form className="unform" onSubmit={handleSubmit}>
      <div className='ColorDeTexto'>
        <h1 style={{marginBottom: '30px'}}>Un formulario</h1>
      </div>
      <input 
        value={user} 
        onChange={handleUserChange} 
        type="text" 
        placeholder="User"
        style={style}
      />
      <br />
      <input 
        value={password} 
        onChange={handlePassChange} 
        type="password" 
        placeholder="Password"
        style={style}
      />
      <br />
      <input type="submit" value="Ingresar" style={style} />
    </form>
  );
}

export default Unform;