import React, { useState } from 'react'

//logo
import logo from '../../Assets/images/logo.png'

//style
import './index.css'
import '../../Components/Navbar/navbar.css'

//helper
import menus from '../../Components/Navbar/helper.js' 

export default () => {

    const [active, setActive] = useState('')

    const handleClick = (value) => {
        setActive(value)
    }

    return (
        <div className="footer">
            <div className="container">
                <div>
                    <a href="#home"><img src={logo} alt="logo" /></a>
                    <p>Адрес: г.Ташкент, Сергелийский район, ул. Кумарык, 59</p>
                    <p>Телефон: +998(99) 0-447-447 +998(90) 951-75-57</p>
                    <p>E-mail: info@snord.uz</p>
                </div>
                <div>
                    <ul className="nav-menu">
                        {
                            menus.map((item) => (
                                <li
                                    key={item.id}
                                    onClick={() => handleClick(item.url)}
                                    className={`nav-menu-item${active === item.url ? ' active' : ''}`}
                                >
                                    {item.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}