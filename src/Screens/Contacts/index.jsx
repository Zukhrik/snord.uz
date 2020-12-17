import React from 'react'
import SectionHeading from '../../Components/SectionHeading/'
import health from '../../Assets/images/CarestreamHealthLogo.jpg'
import aggye from '../../Assets/images/Aggye.png'

//style
import './contact.css'

export default () => {

    return (
        <div className="common-section">
            <div className="container">
                <SectionHeading
                    reasonText="НАС ЦЕНЯТ"
                    heading="НАШИ ПАРТНЕРЫ"
                />
                <div className="partner-wrapper">
                    <div className="partner-item">
                        <img src={aggye} alt="partner-logo" />
                    </div>
                    <div className="partner-item">
                        <img src={health} alt="partner-logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}