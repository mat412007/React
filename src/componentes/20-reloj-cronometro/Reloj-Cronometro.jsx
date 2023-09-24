import { useState, useEffect } from 'react';
import '../../App.css';

function Stopwatch2() {
  const [timer, setTimer] = useState(undefined)
  const [time, setTime] = useState(0)
  const toggleTimer = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(undefined);
    } else {
      const timerId = setInterval(() => setTime(t => t + 1), 10);
      setTimer(timerId);
    }
  };
  const cs = time % 100;
  const s = Math.floor(time / 100) % 60;
  const m = Math.floor(time / 6000) % 60;
  return (
    <>
      <div className='ColorDeTexto'>
        <h1>Cronómetro</h1>
        <h1>
          {m.toString().padStart(2,0)}:
          {s.toString().padStart(2,0)}:
          {cs.toString().padStart(2,0)}
        </h1>
      </div>
      <button className='Botones' onClick={toggleTimer}>
          {timer ? 'Stop' : 'Start'}
      </button>
      <button className='Botones' onClick={() => setTime(0)}>Reset</button>
    </>
  )
} 

function Clock2() {
    const fechaInicial = new Date();
    const [fecha, setFecha] = useState(fechaInicial);

    function tick() {
        const nuevaFecha = new Date();
        setFecha(nuevaFecha);
    };


    useEffect(() => {
        let timerId = setInterval(tick, 1000);
        return () => clearInterval(timerId);
    }, []);
    
    
    return (
        <>
            <div className='ColorDeTexto'>
                <h1>
                    {fecha.getHours().toString().padStart(2,0)}:
                    {fecha.getMinutes().toString().padStart(2,0)}:
                    {fecha.getSeconds().toString().padStart(2,0)}
                
                </h1>
                <h3>{fecha.toLocaleDateString('es-AR')}</h3>    
            </div>
        </>
    )
}   

function RelojCronometro() {

    const [vistaTiempo, setVistaTiempo] = useState(false)

    return(
        <div>
            <button className='Botones' onClick={() => setVistaTiempo(!vistaTiempo)}>{vistaTiempo === true ? "Cronometro" : "Reloj"}</button>
            {vistaTiempo === true ? <Clock2 /> : <Stopwatch2 />}
        </div>
    )

}

export default RelojCronometro