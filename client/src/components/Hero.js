import React from 'react'
import photo from '../images/profile-photo.jpg';

export default function Hero({contactFormRef}) {
    return (
        <main>
            <div className="hero-grid">
                <h1 className="span-2">Info about me...</h1>
                <button>Get Resume</button>
                <button 
                    onClick={() => contactFormRef.current.scrollIntoView({behavior: 'smooth'})}
                >Contact Me</button>
            </div>
            <img src={photo} alt="Daniel Reagan"/>
        </main>
    )
}