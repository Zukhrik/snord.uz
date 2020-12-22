import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import { navbarData } from '../../data/navbar-data.js'

//style
import './mobile-navbar.css'

export default () => {
    const [isOpen, setIsOpen] = useState(false)
    const burgerClassName = `burger${isOpen ? ' active' : ''}`
    const [active, setActive] = useState('#home')
    const handleClick = (value) => {
        setIsOpen(false)
        setActive(value)
    }

    return (
        <div className="burger-menu">
            <div className={burgerClassName} onClick={() => setIsOpen(!isOpen)} />
            {
                isOpen
                && (
                    <div className="mobile-nav-container">
                        <SlideDown closed={!isOpen}>
                            <div className="mobile-nav">
                                {
                                    navbarData.map((item) => (
                                        <AnchorLink
                                            key={item.id}
                                            href={item.url}
                                            offset={() => 60}
                                            onClick={() => handleClick(item.url)}
                                            className={`mobile-menu-link${active === item.url ? ' active' : ''}`}
                                        >
                                            {item.name}
                                        </AnchorLink>
                                    ))
                                }
                            </div>
                        </SlideDown>
                    </div>
                )
            }

        </div>
    )
}