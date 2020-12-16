import React, { useState } from 'react'

//Own Components
import Slider from '../../Components/Slider'
import ListContent from '../../Components/ListContent'
import { Modal } from '../../Components/Modal'
import { medicalData } from '../../data/medical-data'
import { generateRandomData } from '../../utils/data-generating'


export default () => {

    const [open, setOpen] = useState(false)
    const [selectedId, setSelectedId] = useState(null)

    const handleSelect = (id) => {
        setOpen(true)
        setSelectedId(id)
    }

    return (
        <div>
            <Modal
                setIsOpen={setOpen}
                modalIsOpen={open}
                component={<ListContent
                    id={selectedId}
                    allData={medicalData}
                />}
            />

            <Slider
                reverse={true}
                data={generateRandomData(medicalData)}
                handleSelect={handleSelect}
            />
        </div>
    )
}