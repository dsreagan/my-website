import React from 'react'

export default function Project({title, subTitle, info, url, gitRepo}) {
    return (
        <div className="project">
            <h1 className="project-title header">{title}</h1>
            <h4 className="project-subtitle subheader">{subTitle}</h4>
            <p className="project-info">{info}</p>
            <section className="project-links">
                <p><a className="link" href={url} target="_blank" rel="noopener noreferrer">
                    {url}</a>
                </p>
                <p><a className="link" href={gitRepo} target="_blank" rel="noopener noreferrer">
                    Github Repository</a>
                </p>
            </section>
        </div>
    )
}