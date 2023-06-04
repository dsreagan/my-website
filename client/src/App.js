import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Education from './components/pages/Education'
import Projects from './components/pages/Projects'
import { Routes, Route } from 'react-router-dom'

export default function App() {

  return (
    <div className="App">
      <Navbar />
      <container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </container>
    </div>
  )
}