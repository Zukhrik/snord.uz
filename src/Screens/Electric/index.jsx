import React, { useState } from 'react'
import Carousel from '../../Components/Carousel'
import { Modal } from '../../Components/Modal'
import ListContent from '../../Components/ListContent'

//Own components
import SectionHeading from '../../Components/SectionHeading'

//helper
import {eletricalData} from '../../data/eletric-data'

const SLIDER_PER_ITEM = 8

const reverseElectricDate = eletricalData.reverse();


export default () => {
    const [openObj, setOpenObj] = useState(false)
    const [selectedId, setSelectedId] = useState(null)

    const handleSelect = (id) => {
        setOpenObj(true)
        setSelectedId(id)
    }

    const generateDataForSlider = () => {
        const data = []

        for (let i = 0; i < Math.ceil(reverseElectricDate.length / SLIDER_PER_ITEM); i++) {
            const $i = i * SLIDER_PER_ITEM
            const $j = SLIDER_PER_ITEM * (i + 1)
            const tmp = []

            for (let j = $i; j < $j; j++) {
                if (reverseElectricDate[j]) {
                    tmp.push(reverseElectricDate[j])
                } else {
                    break
                }
            }
            data.push(tmp)
        }
        return data
    }

    return (
        <>
            <Modal
                setIsOpen={setOpenObj}
                modalIsOpen={openObj}
                component={<ListContent
                    id={selectedId}
                    allData={reverseElectricDate}
                />}
            />

            <div className="common-section" id="electric">
                <div className="container">
                    <SectionHeading
                        reasonText="ПОЧЕМУ НАШИ ПРОДУКЦИИ"
                        heading="ЭЛЕКТРООБОРУДОВАНИЕ"
                        description="оборудование электрического назначения"
                    />
                    <Carousel
                        data={generateDataForSlider()}
                        handleSelect={handleSelect}
                    />
                </div>
            </div>
        </>
    )
}