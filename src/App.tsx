// import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
function App() {

  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/registration' element={<Register />} />
        </Routes>
      </>
    </Router>
  )
}

export default App
