import React from 'react'

import aboutData from './helper'

import SectionHeading from '../../Components/SectionHeading'

//style
import './about.css'
import Carousel from '../../Components/Carousel'

export default () => {

    return (
        <div className="common-section" id="about">
            <div className="container">
                <SectionHeading
                    reasonText="Почему именно мы"
                    heading="НАШИ ПРЕИМУЩЕСТВА"
                    description="Индивидуальный подход к каждому клиенту с проверенными производителями"
                />

                <div className="about-wrapper">
                    {
                        aboutData.map(item => {
                            const Icon = item.icon
                            return (
                                <div className="about-item" key={item.id}>
                                    <Icon />
                                    <h6>
                                        {item.title}
                                    </h6>
                                    <p>
                                        {
                                            item.description
                                        }
                                    </p>
                                </div>
                            )
                        })
                    }
                   
                </div>
                <Carousel />
            </div>
        </div>
    )
}