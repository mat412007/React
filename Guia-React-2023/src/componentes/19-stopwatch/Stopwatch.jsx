import { useState } from 'react'
import '../../App.css'

const styles = {
  width: '100px',
  display: 'flex-box',
  marginLeft: '20px',
  marginRight: '20px',
  marginBottom: '50px',
  backgroundColor: 'black',
  borderColor: 'red',
  color: 'red'
};

function Stopwatch() {
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
      <button onClick={toggleTimer} style={styles}>
          {timer ? 'Stop' : 'Start'}
      </button>
      <button onClick={() => setTime(0)} style={styles}>Reset</button>
    </>
  )
}

export default Stopwatch;