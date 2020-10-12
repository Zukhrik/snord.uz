import React from 'react'

//Components
import Navbar from '../../Components/Navbar'
import Header from '../../Components/Header'
import Buttons from '../../Components/Buttons'

//Styles
import './home.css'

export default () => {
    return (
        <div className="screen-basic" id="home">
            <div className="home-wrapper">
                <div className="container">
                    <Navbar />
                    <Header />
                    <Buttons />
                </div>
            </div>
        </div>
    )
}