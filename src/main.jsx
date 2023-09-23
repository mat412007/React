import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Random from './componentes/15-random/Random'
import Clock from './componentes/18-clock/Clock'
import Stopwatch from './componentes/19-stopwatch/Stopwatch'
import Tabla from './componentes/21-tabla/Tabla';
import Futbol from './componentes/22-futbol/Futbol';
import Pokemon from './componentes/23-pokemon/Pokemon';
import Todos from './componentes/25-todos/Todos';
import Galeria from './componentes/26-unsplash/Galeria';
import Feriado from './componentes/24-feriado/Feriado'
import Ciphers from './componentes/28-ciphers/Ciphers';
import Trivia from './componentes/29-trivia/Trivia';
import Contador from './componentes/31-contador/Contador';
import Toggle from './componentes/32-render-condicional/Toggle';
import Countdown from './componentes/33-countdown/Countdown';
import Unform from './componentes/42-unform/Unform';
import Navbar from './componentes/14-navbar/Navbar';
import RelojCronometro from './componentes/20-reloj-cronometro/Reloj-Cronometro'
import datos from './datos';
import './index.css';

const links = [
  {name: 'About', url: 'about.html'},
  {name: 'Home', url: 'home.html'},
  {name: 'Contact', url: 'contact.html'}
];

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/relojcronometro',
    element: <RelojCronometro />
  },
  {
    path: '/clock',
    element: <Clock />
  },
  {
    path: '/feriado',
    element: <Feriado />
  },
  {
    path: '/stopwatch',
    element: <Stopwatch />
  },
  {
    path: '/random',
    element: <Random />
  },
  {
    path: '/tabla',
    element: <Tabla datos={datos} />
  },
  {
    path: '/pokemon',
    element: <Pokemon />
  },
  {
    path: '/contador',
    element: <Contador />
  },
  {
    path: '/todos',
    element: <Todos />
  },
  {
    path: '/ciphers',
    element: <Ciphers />
  },
  {
    path: '/trivia',
    element: <Trivia />
  },
  {
    path: '/futbol',
    element: <Futbol />
  },
  {
    path: '/toggle',
    element: <Toggle />
  },
  {
    path: '/galeria',
    element: <Galeria />
  },
  {
    path: '/countdown',
    element: <Countdown />
  },
  {
    path: '/unform',
    element: <Unform />
  },
  {
    path: '/navbar',
    element: <Navbar links={links} />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)





