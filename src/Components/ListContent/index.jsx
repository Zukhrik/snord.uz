import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
//style
import './list-content.css'

export default ({id, allData}) => {
    const [currentData, setCurrentData] = useState(null)

    useEffect(() => {
        if(id && allData) {
            const newData = allData.find(item => item.id === id)
            setCurrentData(newData)
        }

    }, [id, allData])

    return (
        <div>
            {
                currentData && 
                <>
                    <div className='list-title'>
                        {currentData.description}
                    </div>
                    <div className='list-image'>
                        {/* {currentData.img} */}
                        <img src={currentData.img} alt=""/>
                    </div>
                    <div className='list-info'>
                        {currentData.content}
                    </div>
                </>
            }
        </div>
    )
}