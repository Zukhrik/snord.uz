import React from 'react'

//Components
import Navbar from '../../Components/Navbar'
import HomeBody from './Header'

//Styles
import './home.css'

export default () => {
    return (
        <div className="screen-basic" id="home">
            <div className="home-wrapper">
                <div className="container">
                    <Navbar />
                    <HomeBody />
                </div>
            </div>
        </div>
    )
}