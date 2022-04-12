import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { FormContextProvider } from './Context/AllformContext'

ReactDOM.render(
  <React.StrictMode>
    <FormContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </FormContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
