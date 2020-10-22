import React from 'react'

//Components
import Navbar from '../../Components/Navbar'
import HomeBody from './Header'

//Styles
import './home.css'

export default () => {
    return (
        <>
        <Navbar />
        <div className="screen-basic" id="home">
            <div className="home-wrapper">
                <div className="container">
                    <HomeBody />
                </div>
            </div>
        </div>
        </>
    )
}