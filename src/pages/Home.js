import React, { useRef } from 'react'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'

export default function EducationPage() {
  
    const contactFormRef = useRef(null)

    return (
        <div>
            <Hero contactFormRef={contactFormRef} />  
            <ContactForm ref={contactFormRef} />
        </div>
    )
  }