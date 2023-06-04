import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header>
        <nav>
            <ul>
                <li>
                  <Link className="nav-item" to="/">Home</Link>
                </li>
                <li>
                  <Link className="nav-item" to="/projects">Projects</Link>
                </li>
                <li>
                  <Link className="nav-item" to="/education">Education</Link>
                </li>
            </ul>
        </nav>
        </header>
    )
}