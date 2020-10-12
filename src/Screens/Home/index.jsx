import React from 'react'

//Components
import Navbar from '../../Components/Navbar'

//Styles
import './home.css'

export default () => {
    return (
        <div className="screen-basic" id="home">
            <div className="home-wrapper">
                <div className="container">
                    <Navbar />
                </div>
            </div>
        </div>
    )
}