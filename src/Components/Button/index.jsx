import React from 'react'

//Styles
import './button.css'

export default ({className, children, ...props}) => {

    const class_name = `btn ${className}`

    return (
        <button className={class_name} {...props}>
            {children}
        </button>
    )
}

