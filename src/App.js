import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Education from './pages/Education'
import Projects from './pages/Projects'
import { Routes, Route } from 'react-router-dom'

export default function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
      </Routes>
      <Navbar />
    </div>
  )
}