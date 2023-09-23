import { useState } from "react"
import { encrypt } from 'caesar-encrypt' 
import morsify from "morsify" 



function Ciphers() {

    const [palabraNormal, setPalabraNormal] = useState('')
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('cesar')
    const [desplazamiento, setDesplazamiento] = useState(1)

  return (
    <div>
        {/* Cuando quiero poner lo que escribre una persona adentro de un input puedo detectar
        cada vez que escribe con el evento 'onChange' y de ese evento agarrar el 'e' y del 'e' acceder
        al 'e.target.value' que es lo que tiene la persona escrito en ese input y asignarlo a una variable */}
        <input type="text" placeholder='Frase' onChange={(e) => {setPalabraNormal(e.target.value)}}/>
        <select onChange={(e) => setOpcionSeleccionada(e.target.value)}>
            <option value="cesar">Cifrado del desplazamiento</option>
            <option value="rotacion">Cifrado de rotación</option>
            <option value="morse">Morse</option>
        </select>
        {
            opcionSeleccionada === 'cesar' && (
                <div>
                    <input
                    type="number"
                    placeholder="Desplazamiento"
                    value={desplazamiento}
                    onChange={(e) => {setDesplazamiento(e.target.value)}}
                    />
                    <p className="ColorDeTexto" style={{fontSize: '22px'}}>Resultado: {encrypt(palabraNormal, desplazamiento)}</p>
                </div>
            )
        }
        {
            opcionSeleccionada === 'rotacion' && (
                <div className="ColorDeTexto">
                    {/*"hola" -> "h" "o" "l" "a" -> "a" "l" "o" "h" -> "aloh" */}
                    <p style={{fontSize: '22px'}}>Resultado: {palabraNormal.split('').reverse().join('')}</p>
                </div>
            )
        }
        {
            opcionSeleccionada === 'morse' && (
                <p className="ColorDeTexto" style={{fontSize: '22px'}}>Resultado: {morsify.encode(palabraNormal)}</p>
            )
        }
    </div>
  )
}

export default Ciphers