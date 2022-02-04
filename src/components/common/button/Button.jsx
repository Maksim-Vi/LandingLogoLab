import React from 'react'
import './button.scss'

const Button = ({text,onClickHendler}) => {
    return (
        <div className='custom_button' onClick={onClickHendler}>
            <span className='button_text'>{text}</span>
        </div>
    )
}

export default Button
