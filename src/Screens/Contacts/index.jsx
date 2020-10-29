import React from 'react'
import { useState } from 'react'
import SectionHeading from '../../Components/SectionHeading/'

export default () => {
    const [enterKey, setEnterKey] = useState('')
    const pressKey = (e) => {
        setEnterKey(e.key)
        console.log(e.nativeEvent)
    }

    const [val, setVal] = useState('')
    const changeValue = (e) => {
        setVal(e.target.val)
    }

    return (
        <div className="common-section" id="contacts">
            <div className="container">
                <SectionHeading
                    reasonText="Почему именно мы"
                    heading="Наши преимущества"
                    description="Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее"
                />
                <input
                    type="text" 
                    value={ enterKey }
                    onKeyPress={ pressKey }
                />

                <input
                    type="text"
                    value={val}
                    onBlur={changeValue}
                />
            </div>
        </div>
    )
}