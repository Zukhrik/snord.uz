import React from 'react'

export default ({image, title, contentInfo}) => {
    return (
        <div>
            <img src={image} alt="image"/>

            <h2>
                {title.title}
            </h2>
        </div>
    )
}