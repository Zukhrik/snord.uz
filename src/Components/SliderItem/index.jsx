import React from 'react'

//style
import './slider-item.css'

//helper
import Button from '../Button'

export default ({ data, reverse, handleSelect }) => {

    const wrapperClassName = `slider-wrapper${reverse ? ' reverse' : ''}`

    return (
        
            <div
                className={wrapperClassName}
            >
                <div className="slider-info">
                    <h3>{data.title}</h3>

                    <p>{data.description}</p>

                    <Button 
                        className="btn-outline-white slider-btn" 
                        onClick={handleSelect}    
                    >
                        Подробно
                    </Button>
                </div>

                <div className="slider-img">
                    <img src={data.img} alt={data.title} />
                </div>
            </div>      
    )
}