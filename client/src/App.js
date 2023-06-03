import React, { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ContactForm from './components/ContactForm'

export default function App() {

  const contactFormRef = useRef(null)

  return (
    <div className="App">
      <Navbar />
      <Hero contactFormRef={contactFormRef} />  
      <ContactForm ref={contactFormRef} />
    </div>
  )
}