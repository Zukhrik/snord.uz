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

    const CustomComponent = currentData && currentData.component ? currentData.component : <></>

    return (
        <div>
            {
                currentData && 
                <>
                    <div className='list-title'>
                        {currentData.description}
                    </div>
                    <div className='list-image'>
                        <img src={currentData.img} alt=""/>
                    </div>
                        <CustomComponent />
                </>
            }
        </div>
    )
}