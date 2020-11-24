import React, { useState } from 'react'
import SectionHeading from '../../Components/SectionHeading'
import ListItem from '../../Components/ListItem'
//helper
import electricList from './helper'
import { Modal } from '../../Components/Modal'
import ListContent from '../../Components/ListContent'


export default () => {
    const [openObj, setOpenObj] = useState(false)
    const [selectedId, setSelectedId] = useState(null)

    const handleSelect = (id) => {
        setOpenObj(true)
        setSelectedId(id)
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
                    <div className="product-wrapper">
                        {
                            electricList.map(item => (
                                <ListItem
                                    key={item.id}
                                    item={item}
                                    handleSelect={handleSelect}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}