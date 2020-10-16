import React, { useState } from 'react'

//helper
import rainbow from './helper'

//style
import './about.css'

export default () => {

    const [bg, setBg] = useState(null)

    const bgColor = (value) => {
        setBg(value)
    }

    return (

        // <div>
        //     <button 
        //         onClick={() => bgColor(item.color)}
        //         className={}
        //     >1</button>
        //     <button>2</button>
        //     <button>3</button>
        //     <button>4</button>
        //     <button>5</button>
        // </div>

        <div className="buttonsBg">
            {
                rainbow.map((item) => (
     
                        <button
                            key={item.id}
                            onClick={() => bgColor(item.color)}
                            className={`${bg === item.color ? 'active' : ''}`}
                            style={
                                background = item.color
                            }
                        >
                            {item.name}
                        </button>
                   
                ))
            }
        </div>

    )
}