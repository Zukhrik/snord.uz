import React from 'react'
import Button from '../../Components/Button'

export default () => (
    <div className="home-body">
        <div className="home-body-inner">
            <h1>Качество и надежность</h1>
            <p>Соответствие высоким стандартам качества.
            Соблюдение объемов и сроков поставки. Профессиональное техническое обслуживание.
        </p>

            <div className="home-buttons">
                <Button className="btn-white">
                    оборудивание
                </Button>
                <Button className="btn-outline-white">
                    о нас
                </Button>
            </div>
        </div>
    </div>
)