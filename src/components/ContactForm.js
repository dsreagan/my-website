import React, {forwardRef, useState} from 'react'
import emailjs from "emailjs-com"

function ContactForm(props, ref) {

    function sendEmail(e) {
        e.preventDefault()

        emailjs.sendForm('service_auv0vf6', 'template_1', e.target, '38BrczIT3iHsrFIs6')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
        e.target.reset()
    }

    // const [formData, setFormData] = useState(
    //     {name: "", email: "", message: ""}
    // )

    // function handleChange(event) {
    //     setFormData(prevFormData => ({
    //         ...prevFormData,
    //         [event.target.name]: event.target.value
    //     }))
    // }

    return (
        <div ref={ref} className="contact">
        <form onSubmit={sendEmail}>
            <h1>Contact Me</h1>
            <div className="contact-grid">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"

                    // onChange={handleChange}// Would have to reset state after form is submitted.
                    // value={formData.name}//
                />
                <input 
                    type="email"
                    name="email"
                    placeholder="Email"

                    // onChange={handleChange}
                    // value={formData.email}
                />
                <textarea 
                    placeholder="How can I help you?"
                    name="message"

                    // onChange={handleChange}
                    // value={formData.message}                    
                />
            </div>
            <button>Submit</button>
        </form>
        </div>
    )
}

export default forwardRef(ContactForm)