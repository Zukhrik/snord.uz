import React from 'react'

//helper
import Button from '../Button'
import Aggye from '../../Assets/images/Aggye.png'
import Carousel from 'react-multi-carousel'
// import SliderItem from '../SliderItem'


//style
import './slider.css'

export default ({ reverse, data }) => {

    const wrapperClassName = `slider-wrapper${reverse ? ' reverse' : ''}`

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const renderNumber = () => {
        const tmp = []

        for (let i = 0; i < 5; i++) {
            tmp.push(i)
        }
        return tmp
    }

    return (
        <div className="slider-container">
            <div className="container">
                <Carousel
                    showDots
                    responsive={responsive}
                >

                    {
                        renderNumber().map(item => (
                            <div 
                                key={item} 
                                className={wrapperClassName}
                            >
                                <div className="slider-info">
                                    <h3>Больничные койки</h3>

                                    <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее</p>

                                    <Button className="btn-outline-white slider-btn" >
                                        Подробно
                                    </Button>
                                </div>

                                <div className="slider-img">
                                    <img src={Aggye} alt="aggye" />
                                </div>
                            </div>

                            // <SliderItem />
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}