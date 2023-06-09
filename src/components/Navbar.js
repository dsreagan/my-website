import React from 'react'

export default function Navbar(props) {
    return (
        <header>
        <nav>
            <ul>
                <li onClick={() => props.setPage("Home")} className="nav-item">
                  Home
                </li>
                <li onClick={() => props.setPage("Projects")} className="nav-item">
                  Projects
                </li>
                <li onClick={() => props.setPage("Education")} className="nav-item">
                  Education
                </li>
            </ul>
        </nav>
        </header>
    )
}