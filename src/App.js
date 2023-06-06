import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Education from './pages/Education'
import Projects from './pages/Projects'

export default function App() {

  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/projects":
      component = <Projects />
      break
    case "/education":
      component = <Education />
      break
  }

  return (
    <div className="App">
      <Navbar />
      {component}
    </div>
  )
}