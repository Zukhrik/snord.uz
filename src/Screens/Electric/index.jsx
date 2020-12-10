import React, { useState } from 'react'
import SectionHeading from '../../Components/SectionHeading'

//helper
import electricList from './helper'
import { Modal } from '../../Components/Modal'
import ListContent from '../../Components/ListContent'
import Carousel from '../../Components/Carousel'

const SLIDER_PER_ITEM = 8


export default () => {
    const [openObj, setOpenObj] = useState(false)
    const [selectedId, setSelectedId] = useState(null)

    const handleSelect = (id) => {
        setOpenObj(true)
        setSelectedId(id)
    }

    const generateDataForSlider = () => {
        const data = []

        for (let i = 0; i < Math.ceil(electricList.length / SLIDER_PER_ITEM); i++) {
            const $i = i * SLIDER_PER_ITEM
            const $j = SLIDER_PER_ITEM * (i + 1)
            const tmp = []

            for (let j = $i; j < $j; j++) {
                if (electricList[j]) {
                    tmp.push(electricList[j])
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
                    allData={electricList}
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