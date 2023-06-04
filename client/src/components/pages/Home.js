import React, { useRef } from 'react'
import Hero from '../Hero'
import ContactForm from '../ContactForm'

export default function EducationPage() {
  
    const contactFormRef = useRef(null)

    return (
        <div>
            <Hero contactFormRef={contactFormRef} />  
            <ContactForm ref={contactFormRef} />
        </div>
    )
  }