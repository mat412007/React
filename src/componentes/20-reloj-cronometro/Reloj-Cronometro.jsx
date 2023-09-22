import Clock from './18-clock/Clock'
import Stopwatch from '.19-stopwatch/Stopwatch'
import { useState }  from 'react'

function RelojCronometro() {

    const [vistaTiempo, setVistaTiempo] = useState(false)

    return(
        <div>
            <button onClick={() => setVistaTiempo(!vistaTiempo)}>{vistaTiempo === true ? "Cronometro" : "Reloj"}</button>
            {vistaTiempo === true ? <Clock/> : <Stopwatch/>}
        </div>
    )

}


export default RelojCronometro