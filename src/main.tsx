import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
//ReactDom es el q va a crear un nodo de react dentro del elemento root  y esta va a renderizar lo q le pasemos. está renderizando react strictmode
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
//para los componentes mirar https://getbootstrap.com/docs/5.3/components/card/