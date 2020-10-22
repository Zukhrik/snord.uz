import React from 'react'
import SectionHeading from '../../Components/SectionHeading'
import ListItem from '../../Components//ListItem'
import medicineList from './helper'

export default () => (
    <div className="common-section" id="medicine">
        <div className="container">
            <SectionHeading
                reasonText="Почему наши продукции"
                heading="ПРОДУКЦИЯ"
                description="медицинского назначения"
            />
            <div className="product-wrapper">
                {
                    medicineList.map(item => (
                        <ListItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    </div>
)