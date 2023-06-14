import React from 'react'

export default function Project({title, subTitle, info, link}) {
    return (
        <div>
            <h2>{title}</h2>
            <h4>{subTitle}</h4>
            <p>{info}</p>
            <p><a href={link}>{link}</a></p>
        </div>
    )
}