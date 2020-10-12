import React from 'react'

//helper
import menus from './helper'
import logo from '../../Assets/images/logo.png'

//Styles
import './navbar.css'

export default () => {
    return (
        <div className="navbar">
            <a href="#home" className="logo">
                <img src={logo} alt="logo" />
            </a>
            <ul className="nav-menu">
                {
                    menus.map((item) => (
                        <li key={item.id} className="nav-menu-item">
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