import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { MainContextProvider } from './context/MainContext'

ReactDOM.render(
  <React.StrictMode>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
