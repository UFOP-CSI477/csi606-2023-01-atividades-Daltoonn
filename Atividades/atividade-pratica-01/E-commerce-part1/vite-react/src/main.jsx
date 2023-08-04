import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouters from './router.jsx'

//renderizando mecanismo de rota 
// <AppRouters É chamada do funcao app é onde estao todas as rotas que sao as funcoes do programa

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouters />
  </React.StrictMode>,
)
