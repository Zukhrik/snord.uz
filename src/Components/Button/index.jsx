import React from 'react'

//Styles
import './button.css'

export default (props) => {
    const { children, className } = props
    // const class_name = `btn ${className}`
    const class_name = 'btn' + className ? ' ' + className : ''

    return (
        <button className={class_name}>
            {children}
        </button>
    )
}

