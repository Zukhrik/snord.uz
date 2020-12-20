import React, { useState } from 'react'

//logo
import logo from '../../Assets/images/logo.png'

//style
import './footer.css'

//helper
import menus from '../../Components/Navbar/helper.js'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default () => {

    const [active, setActive] = useState('#home')

    const handleClick = (value) => {
        setActive(value)
    }

    return (
        <div className="footer" id="contacts">
            <div className="container">
                <div className="footer-back mobile-padding">
                    <div className="footer-contact-list">
                        <span
                            onClick={() => setActive('#home')}
                        >
                            <AnchorLink
                                href="#home"
                                offset={() => 72}
                            >
                                <img
                                    src={logo}
                                    alt="logo"
                                    className="footer-logo"
                                />
                            </AnchorLink>
                        </span>

                        <p>Адрес: г.Ташкент, Сергелийский район, ул. Кумарык, 59</p>
                        <p>Телефон: +998(99) 0-447-447 +998(90) 951-75-57</p>
                        <p>E-mail: info@snord.uz</p>
                    </div>
                    <div className="menu-wrapper">
                    <h6>МЕНЮ</h6>
                        <ul className="menu">
                            {
                                menus.map((item) => (
                                    <li
                                        key={item.id}
                                        onClick={() => handleClick(item.url)}
                                        className={`menu-item${active === item.url ? ' active' : ''}`}
                                    >

                                        <AnchorLink
                                            href={item.url}
                                            offset={() => 72}
                                            className="menu-link"
                                        >
                                            {item.name}
                                        </AnchorLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="e-mail">
                        <h6>ОБРАТНАЯ СВЯЗЬ</h6>
                        <p>По вопросам и пожеланием заполните поля</p>

                        <form>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                            >
                            </input>
                            <button>
                                ОТПРАВИТЬ
                        </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}