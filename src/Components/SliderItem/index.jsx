import React from 'react'

//style
import './slider-item.css'

//helper
import Button from '../Button'
import Aggye from '../../Assets/images/Aggye.png'

export default ({ reverse }) => {

    const wrapperClassName = `slider-wrapper${reverse ? ' reverse' : ''}`

    return (
        
            <div
                // key={item}
                className={wrapperClassName}
            >
                <div className="slider-info">
                    <h3>Больничные койки</h3>

                    <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее</p>

                    <Button className="btn-outline-white slider-btn" >
                        Подробно
                    </Button>
                </div>

                <div className="slider-img">
                    <img src={Aggye} alt="aggye" />
                </div>
            </div>      
    )
}