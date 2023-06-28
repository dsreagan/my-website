import React from 'react'

export default function Project({title, subTitle, info, url, gitRepo}) {
    return (
        <div className="project">
            <h1 className="project-title">{title}</h1>
            <h4 className="project-subtitle">{subTitle}</h4>
            <p className="project-info">{info}</p>
            <p><a className="project-link" href={url} target="_blank" rel="noopener noreferrer">
                {url}</a>
            </p>
            <p><a className="project-link" href={gitRepo} target="_blank" rel="noopener noreferrer">
                Github Repository</a>
            </p>
        </div>
    )
}