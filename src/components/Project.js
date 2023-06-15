import React from 'react'

export default function Project({title, subTitle, info, link}) {
    return (
        <div className="project">
            <h2 className="project-title">{title}</h2>
            <h4 className="project-subtitle">{subTitle}</h4>
            <p className="project-info">{info}</p>
            <p><a  className="project-link" href={link}>{link}</a></p>
        </div>
    )
}