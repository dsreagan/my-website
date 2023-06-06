import React from 'react'

export default function Navbar() {
    return (
        <header>
        <nav>
            <ul>
                <li>
                  <a className="nav-item" href="/">Home</a>
                </li>
                <li>
                  <a className="nav-item" href="/projects">Projects</a>
                </li>
                <li>
                  <a className="nav-item" href="/education">Education</a>
                </li>
            </ul>
        </nav>
        </header>
    )
}