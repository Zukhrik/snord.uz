import React, { useState } from 'react'
//logo
import logo from '../../Assets/images/logo.png'
//style
import './footer.css'
//emailjs
import emailjs from '@emailjs/browser'

//helper
import menus from '../../Components/Navbar/helper.js'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default () => {
    const [active, setActive] = useState('#home')

    const handleClick = (value) => {
        setActive(value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        emailjs.sendForm('service_0hmedwk', 'template_2kgy2n4', e.target, 'CsJ7njyvpOUE091fb')
        console.log(e.target, 'target');
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
                        <form onSubmit={handleSubmit}>
                            <input
                              name='from_name'
                              type='string'
                              placeholder='Введите имя ...'
                            />
                            <input
                              name='phone'
                              type='number'
                              placeholder='+998 __ ___ __ __'
                            />
                            <input
                                type="email"
                                name="email_from"
                                placeholder="you@example.com"
                            />
                            <textarea
                              name='message'
                              placeholder='Коментарии'
                              cols={5}
                              rows={3}
                            />
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