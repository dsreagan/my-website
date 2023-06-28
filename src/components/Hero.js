import React from 'react'
import photo from '../images/profile-photo.jpg';
import resume from '../files/TempResume.pdf'
import linkedInLogo from '../images/linkedin.svg'
import githubLogo from '../images/github.svg'
import heroIntro from '../data/hero-data'

export default function Hero({contactFormRef}) {
    return (
        <main className="hero">
            <div className="hero-grid">
                <section className="span-2">
                    <h1 className="hero-header">{heroIntro.header}</h1>
                    <h3 className="hero-subheader">
                        {heroIntro.subHeader1}<span>{heroIntro.name}</span>{heroIntro.subHeader2}
                    </h3>
                </section>
                <a href={resume} download="Resume">
                <button className="hero-btn">Get Resume</button>
                </a>
                <button className="hero-btn"
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