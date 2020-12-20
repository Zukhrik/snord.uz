import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import {navbarData} from '../../data/navbar-data.js'

//style
import './mobile-navbar.css'

export default () => {
    const [isOpen, setIsOpen] = useState(false)
    const burgerClassName = `burger${isOpen ? ' active' : ''}`
    const [active, setActive] = useState(false)
    const handleClick = (value) => {
        setActive(value)
    }

    return (
        <div className="burger-menu">
            <div className={burgerClassName} onClick={() => setIsOpen(!isOpen)} />
            <div>
                <SlideDown closed={!isOpen}>
                 {
                     navbarData.map((item) => (
                         <li
                            key={item.id}
                            onClick={() => handleClick(item.url)}
                            className="mobile-nav-menu"
                         >
                             <AnchorLink
                                href={item.url}
                                offset={() => 60}
                                className={`mobile-nav-menu-item${active === item.url ? ' active' : ''}`}
                             >
                                 {item.name}
                             </AnchorLink>
                         </li>
                     ))
                 }
                </SlideDown>
            </div>
        </div>
    )
}