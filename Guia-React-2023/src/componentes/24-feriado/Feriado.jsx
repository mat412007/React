import { useEffect, useState } from "react"



function Feriado() {

    const fechaProximoFeriado = '2023-10-13'; /*Ir cambiando según el feriado más cercano*/
    const [diasFaltantes, setDiasFaltantes] = useState(0);
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
    
    useEffect(() => {
      const fechaFeriado = new Date(fechaProximoFeriado);
      const fechaActual = new Date();
  
      // Resto las fechas en milisegundos (Siempre es asi con Date)
      const diferenciaTiempo = fechaFeriado - fechaActual;
      // Math.Ceil redondea para arriba y divido la diferencia de los días (en milisegundos)
      // por los milisegundos que hay en un día para obtener el total de días
      const dias = Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24));
  
      setDiasFaltantes(dias);
    }, [fechaProximoFeriado]);
  
    return (
      <div className="ColorDeTexto">
        <h1>Cuenta regresiva para el feriado</h1>
        <h3 style={{fontSize: '25px'}}>Fecha actual: {fecha.toLocaleDateString('es-AR')}</h3>    
        <h3 style={{fontSize: '25px'}}>Próximo feriado: {fechaProximoFeriado}</h3>
        <p style={{fontSize: '25px'}}>{diasFaltantes} días restantes</p>
      </div>
    );

}

export default Feriado