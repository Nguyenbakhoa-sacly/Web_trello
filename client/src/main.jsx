import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import CssBaseline from '@mui/material/CssBaseline'
import Theme from './theme.js'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssVarsProvider theme={Theme}>
      <CssBaseline />
      <App />
    </CssVarsProvider>
  </React.StrictMode>,
)
