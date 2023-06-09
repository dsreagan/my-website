import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Education from './pages/Education'
import Projects from './pages/Projects'

export default function App() {
  
  const [page, setPage] = useState("Home")

  let Component
  switch (page) {
    case "Home":
      Component = Home
      break
    case "Education":
      Component = Education
      break
    case "Projects":
      Component = Projects
      break
    default:
      Component = Home
  }

  return (
    <div className="App">
      <Navbar setPage={setPage} />
      <Component />
    </div>
  )
}