import React from 'react'
import photo from '../images/profile-photo.jpg';

export default function Navbar() {
    return (
        <main>
            <img src={photo} alt="Daniel Reagan"/>
            <button>Get Resume</button>
            <button>Contact Me</button>
        </main>
    )
}