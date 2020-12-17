import React from 'react'
import './section-heading.css'

export default ({reasonText, heading, description}) => {
    
    return (
        <div className="section-heading-wrapper mobile-padding">
            <div className="reason-text">
                {reasonText}
            </div>
            <h2 className="section-heading">
                {heading}
                </h2>
            <p className="section-description">
                {description}
            </p>
        </div>
    )
}