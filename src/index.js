import React                                        from 'react'
import ReactDOM                                     from 'react-dom/client'
import App                                          from './App'
import { BrowserRouter as Router, Routes, Route }   from 'react-router-dom'
import Shop                                         from './pages/Shop'
import APropos                                      from './pages/APropos'
import Contact                                      from './pages/Contact'

import './index.css'
import "typeface-anton"
import "typeface-manrope"
import Clubs from './pages/Clubs'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={ <App /> } />
        <Route path="/boutique" element={ <Shop /> } />
        <Route path="/a-propos" element={ <APropos /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/nos-clubs" element={ <Clubs /> } />
      </Routes>
    </Router>
  </React.StrictMode>
)
