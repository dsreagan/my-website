import React, {useState} from 'react'

export default function ContactForm() {

    const [formData, setFormData] = useState(
        {name: "", email: "", message: ""}
    )

    console.log(formData)

    function handleChange(event) {
        setFormData(prevFormData => ({
            ...prevFormData,
            [event.target.name]: event.target.value
        }))
    }

    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <div className="contact-grid">
                <input
                    type="text"
                    placeholder="Your Name"
                    onChange={handleChange}
                    name="name"
                    value={formData.name}
                />
                <input 
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <textarea 
                    placeholder="How can I help you?"
                    onChange={handleChange}
                    name="message"
                    value={formData.message}                    
                />
            </div>
            <button>Submit</button>
        </div>
    )
}