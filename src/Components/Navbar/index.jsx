import React, { useState } from 'react'

//helper
import menus from './helper'
import logo from '../../Assets/images/logo.png'

//Styles
import './navbar.css'

export default () => {
    const [active, setActive] = useState(null)

    const handleClick = (value) => {
        setActive(value)
    }

    return (
        <div className="navbar">
            <a href="#home" className="logo" onClick={() => setActive('#home')}>
                <img src={logo} alt="logo" />
            </a>
            <ul className="nav-menu">
                {
                    menus.map((item) => (
                        <li
                            key={item.id} 
                            onClick={() => handleClick(item.url)}
                            className={`nav-menu-item${active === item.url ? ' active' : ''}`}
                        >
                            <a href={item.url} className="nav-menu-link">
                                {item.name}
                            </a>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}