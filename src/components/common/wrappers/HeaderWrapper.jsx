import React from 'react'
import './wrappers.scss'

const HeaderWrapper = ({children, ref}) => {
    return (
        <div id='home' className='header_wrapper'>
            {children}
        </div>
    )
}

export default HeaderWrapper
