import React, { useEffect, useState } from 'react'
import Button from '../Button'

//helper

//style
import './slide.css'

export default ({ id, allData }) => {

    const [currentData, setCurrentData] = useState(null)

    useEffect(() => {
        if (id && allData) {
            const newData = allData.find(item => item.id === id)
            setCurrentData(newData)
        }

    }, [id, allData])

    const CustomComponent = currentData && currentData.component ? currentData.component : <></>

    return (
        <div className="slide-wrapper">
            {
                currentData &&
                <>
                    <div>
                        <h4 className="">
                            {currentData.title}
                        </h4>

                        <p>
                            {currentData.description}
                        </p>

                        <Button>
                            Подробно
                        </Button>
                    </div>

                    <div className="">
                        <img src={currentData.img} alt="product-img" />
                    </div>
                    {
                        currentData.component
                        && (
                            <CustomComponent />
                        )
                    }

                    {/* {
                        !currentData.component
                        && (
                            <div className="">
                                {currentData.content}
                            </div>
                        )
                    } */}

                </>
            }
        </div>
    )
}