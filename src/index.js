import React                                        from 'react'
import ReactDOM                                     from 'react-dom/client'
import App                                          from './App'
import { BrowserRouter as Router, Routes, Route }   from 'react-router-dom'
import './index.css'
import "typeface-anton"
import "typeface-manrope"
import Shop from './pages/Shop'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={ <App /> } />
        <Route path="/boutique" element={ <Shop /> } />
      </Routes>
    </Router>
  </React.StrictMode>
)
