import React from 'react'
import Carousel from 'react-multi-carousel'

//Own components
import SliderItem from '../SliderItem'
import PropTypes from 'prop-types'

//style
import './slider.css'

const SliderComponent = ({ reverse, data, handleSelect }) => {

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

    return (
        <div className="slider-container">
            <div className="container">
                <Carousel
                    showDots
                    arrows={false}
                    responsive={responsive}
                >
                    {
                        data.map((item, idx) => (

                            <SliderItem
                                reverse={reverse}
                                key={`${idx + 1}`}
                                data={item}
                                handleSelect={() => handleSelect(item.id)}
                            />
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

SliderComponent.propTypes = {
    reverse: PropTypes.bool,
    data: PropTypes.array
}

SliderComponent.defaultProps = {
    reverse: true,
    data: []
}

export default SliderComponent