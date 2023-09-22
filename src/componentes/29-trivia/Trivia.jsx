import { useState } from 'react';
import questions from './questions';
import '../../App.css';

const Trivia = props => {

  const [playing, setPlaying] = useState(false); 
  const [gameOver, setGameOver] = useState(false); 
  const [count, setCount] = useState(0);
  const restartGame = () => {
   setPlaying(false);
   setGameOver(false);
   setCount(0);
  };

  if (!playing && !gameOver)
    return <Start setPlaying={setPlaying} />; 
  else if (gameOver)
    return <GameOver count={count} restartGame={restartGame} />;
  else
    return <Game count={count} setCount={setCount} questions={questions} setGameOver={setGameOver} />;

};

const Game = props => {
  const [idx, setIdx] = useState(0);
  const { setGameOver, questions, count, setCount } = props;  
  
  const handleClick = e => {
    if (e.target.textContent === questions[idx].correct) {
      setCount(count+1);
      e.target.classList.add('green');
    } else {
      e.target.classList.add('red');
    } 
    setTimeout(() => {
      if (idx+1 === questions.length) 
        setGameOver(true)
      else {
        e.target.classList.remove('red');
        e.target.classList.remove('green');
        setIdx(idx+1);
      }                            
    }, 1000);
  };
  return (
    <>
      <div className='ColorDeTexto'>
        <h2>{count}/{questions.length}</h2>
        <h1>{questions[idx].question}</h1>
      </div>
      {questions[idx].answers.map(a => <button className="choice" key={a} onClick={handleClick}>{a}</button>)}
    </>
  );
};

const GameOver = props => {
  
  const { restartGame, count } = props;
  
  return (
    <>
    <div className='ColorDeTexto'>
      <h1>Le pegaste a {count} de {questions.length}</h1>
      <h2>{count < 4 ? 'Sos malo' : count < 10 ? 'Sos masomenos' : 'Sos un genio'} </h2>
    </div>
      <button onClick={restartGame}>Volver a jugar</button>
    </>
  );
};

const Start = props => {
  const { setPlaying } = props;
  return (
    <>
      <div className='ColorDeTexto'>
        <h1>Trivia</h1>
      </div>
      <button onClick={() => setPlaying(true)}>Jugar</button>
    </>
  );
};

export default Trivia;