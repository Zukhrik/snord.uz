import React from 'react'

//style
import Button from '../../Components/Button'

//helper
import AnchorLink from 'react-anchor-link-smooth-scroll'


export default () => (
    <div className="home-body">
        <div className="home-body-inner">
            <h1>Качество и надежность</h1>
            <p>Соответствие высоким стандартам качества.
            Соблюдение объемов и сроков поставки. Профессиональное техническое обслуживание.
        </p>

            <div className="home-buttons">
                <AnchorLink 
                     href="#electric"
                     offset={() => 72}
                >
                    <Button className="btn-white">
                        Оборудование
                    </Button>
                </AnchorLink>

                <AnchorLink 
                    href="#contacts"
                    offset={() => 72}
                >
                    <Button className="btn-outline-white">
                        о нас
                    </Button>
                </AnchorLink>
            </div>
        </div>
    </div>
)