import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Lista from './componentes/Lista'
import './index.css'
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='/lista' element={<Lista />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
