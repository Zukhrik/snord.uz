import React from 'react'
import Button from '../Button'

import './list-item.css'

export default ({item}) => {
    return (
        <div className="list-item">
            <div className="list-item-img">
            <img src={item.img} alt={item.title} />
            </div>

            <div className="list-item-content">
            <h6>
               {item.title} 
            </h6>

            <p>
                {
                    item.description
                }
            </p>

            <Button className="btn-primary">
                Подробно
            </Button>
            </div>
        </div>
    )
}