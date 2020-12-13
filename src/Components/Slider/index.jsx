import React from 'react'
import Button from '../Button'
import Aggye from '../../Assets/images/Aggye.png' 

//helper

//style
import './slider.css'

export default ({item, handle}) => {



    return (
        <div className="slider-wrapper">
            <div className="wrapper">
                <div className="slider-info">
                    <h3>Больничные койки</h3>

                    <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее</p>

                    <Button className="btn-outline-white slider-btn" >
                        Подробно
                    </Button>
                </div>

                <div className="slider-img">
                    <img src={Aggye} alt="aggye"/>
                </div>
            </div>
        </div>
    )
}