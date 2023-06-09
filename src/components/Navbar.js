import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <header>
        <nav>
            <ul>
                <li className="nav-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/projects">Projects</Link>
                </li>
                <li className="nav-item">
                  <Link to="/education">Education</Link>
                </li>
            </ul>
        </nav>
        </header>
    )
}

// <li onClick={() => props.setPage("Home")} className="nav-item">
//                   Home
//                 </li>
//                 <li onClick={() => props.setPage("Projects")} className="nav-item">
//                   Projects
//                 </li>
//                 <li onClick={() => props.setPage("Education")} className="nav-item">
//                   Education
//                 </li>