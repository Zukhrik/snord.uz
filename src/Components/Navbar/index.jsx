import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

//helper
import menus from './helper'
import { useEffect } from 'react'
import logo from '../../Assets/images/logo.png'

//Styles
import './navbar.css'

export default () => {
    const [active, setActive] = useState('#home')
    const [fixedProp, setFixedProp] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    const handleClick = (value) => {
        setActive(value)
    }

    const changeFixedProp = () => {
        if (window.scrollY > 50) {
            setFixedProp(true)
        } else {
            setFixedProp(false)
        }
    }

    useEffect(() => {
        changeFixedProp()
        window.addEventListener('scroll', (e) => {
            changeFixedProp()
        })

        return () => {
            window.removeEventListener('scroll', changeFixedProp)
        }
    }, [])

    const resize = () => {
        if (window.innerWidth <= 992) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        resize()
        window.addEventListener('resize', () => {
            resize()
        })

        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
        <div className={`navbar${fixedProp ? ' navbar-fixed' : ''}`}>
            <div className="container">
                <div className="navbar-wrapper">
                    <span
                        onClick={() => setActive('#home')}
                        className="logo-span"
                    >
                        <AnchorLink
                            href="#home"
                            offset={() => 72}
                            className="logo"
                        >
                            <img src={logo} alt="logo" />
                        </AnchorLink>
                    </span>
                    {
                        isMobile
                            ? 'mobile'
                            : (
                                <ul className="nav-menu">
                                    {
                                        menus.map((item) => (
                                            <li
                                                key={item.id}
                                                onClick={() => handleClick(item.url)}
                                                className={`nav-menu-item${active === item.url ? ' active' : ''}`}
                                            >
                                                <AnchorLink
                                                    href={item.url}
                                                    offset={() => 72}
                                                    className="nav-menu-link"
                                                >
                                                    {item.name}
                                                </AnchorLink>
                                            </li>
                                        ))
                                    }
                                </ul>
                            )
                    }

                </div>
            </div>
        </div>
    )
}