import React, { useState } from 'react'

//helper
import rainbow from './helper'

//style
import './about.css'
import Button from '../../Components/Button'

export default () => {

    const [color, setColor] = useState('')

    const changeColor = (colorString) => {
        setColor(colorString)
    }


    return (
        <div className="buttonsBg">
            {
                rainbow.map(item => (
                    <button
                        key={item.id}
                        onClick={() => changeColor(item.color)}
                        style={{ color: color === item.color? color : 'unset' }}
                    >
                        {item.name}
                    </button>
                ))
            }

            <Button className="btn-blue">
                Продукция
            </Button>

            <Button className="btn-outline-blue">
                Показать
            </Button>
        </div>
    )
}