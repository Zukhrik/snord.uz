import React, { useState } from 'react'

import './mobile-navbar.css'

export default () => {
    const [isOpen, setIsOpen] = useState(false)

    const burgerClassName = `burger${isOpen ? ' active' : ''}`

    return (
        <div className="burger-menu">
            <div className={burgerClassName} onClick={() => setIsOpen(!isOpen)}></div>
        </div>
    )
}