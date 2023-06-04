import React from 'react'
import photo from '../images/profile-photo.jpg';
import resume from '../files/TempResume.pdf'
import linkedInLogo from '../images/linkedin.svg'
import githubLogo from '../images/github.svg'

export default function Hero({contactFormRef}) {
    return (
        <main>
            <div className="hero-grid">
                <h1 className="span-2">Info about me...</h1>
                <a href={resume} download="Resume"><button>Get Resume</button></a>
                <button 
                    onClick={() => contactFormRef.current.scrollIntoView({behavior: 'smooth'})}
                >Contact Me</button>
            </div>
            <div className="profile-flex">
                <img className="profile-photo" src={photo} alt="Daniel Reagan"/>
                <div className="profile-logos">
                <a href="https://www.linkedin.com/in/dsreagan/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedInLogo} alt="Daniel Reagan"/>
                </a>
                <a href="https://github.com/dsreagan" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="Daniel Reagan"/>
                </a>
                </div>
            </div>
        </main>
    )
}