import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home'
import ThemeProvider from './ThemeProvider/ThemeProvider'

ReactDOM.render(
  <ThemeProvider>
    <Home />
  </ThemeProvider>,
  document.getElementById('root')
)
