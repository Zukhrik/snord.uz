import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ListItem from '../ListItem';

import './carousel.css'

export default ({ data, handleSelect }) => {
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
    console.log(data);

    return (
        <div className="carousel-container">
            {
                data && data.length > 0
                && (
                    <Carousel responsive={responsive}>
                        {
                            data.map((sliderItem, idx) => (
                                <div
                                    key={`${idx + 1}`}
                                    className="product-wrapper"
                                >
                                    {
                                        sliderItem.map(item => (
                                            <ListItem
                                                key={item.id}
                                                item={item}
                                                handleSelect={handleSelect}
                                            />
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </Carousel>
                )
            }
        </div>
    )
}