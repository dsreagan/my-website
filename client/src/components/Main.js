import React from 'react'
import photo from '../images/profile-photo.jpg';

export default function Navbar() {
    return (
        <main className="main-body">
            <img src={photo}/>
            <button>Get Resume</button>
            <button>Contact Me</button>
        </main>
    )
}