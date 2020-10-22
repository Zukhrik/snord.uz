import React from 'react'
import SectionHeading from '../../Components/SectionHeading'
import ListItem from '../../Components/ListItem'

import electricList from './helper'

export default () => (
    <div className="common-section" id="electric">
        <div className="container">
            <SectionHeading
                reasonText="ПОЧЕМУ НАШИ ПРОДУКЦИИ"
                heading="ПРОДУКЦИЯ"
                description="электрического назначения"
            />
            <div className="product-wrapper">
                {
                    electricList.map(item => (
                        <ListItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    </div>
)