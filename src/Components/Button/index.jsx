import React from 'react'

//Styles
import './button.css'

export default (props) => {
    const { children, className } = props
    console.log(props);
    const class_name = `btn ${className}`
    return (
        <button className={class_name}>
            {children}
        </button>
    )
}