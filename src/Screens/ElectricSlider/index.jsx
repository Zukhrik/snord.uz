import React, { useState } from 'react'

//Own components
import Slider from '../../Components/Slider/index.jsx'
import { Modal } from '../../Components/Modal'

//helper
import {eletricalData} from '../../data/eletric-data'
import ListContent from '../../Components/ListContent/index.jsx'
import { generateRandomData } from '../../utils/data-generating.js'

export default () => {

    const [open, setOpen] = useState(false)
    const [selectedId, setSelectedId] = useState(null)

    const handleSelect = (id) => {
        setOpen(true)
        setSelectedId(id)
    }

    return (
        <>
            <Modal
                setIsOpen={setOpen}
                modalIsOpen={open}
                component={<ListContent
                    id={selectedId}
                    allData={eletricalData}
                />}
            />
            <Slider
                reverse={false}
                data={generateRandomData(eletricalData)}
                handleSelect={handleSelect}
            />
        </>
    )
}