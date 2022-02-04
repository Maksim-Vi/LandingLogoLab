import React from 'react'
import HeaderWrapper from '../common/wrappers/HeaderWrapper'
import HeaderMiddle from './components/HeaderMiddle'
import HeaderTop from './components/HeaderTop'

const Header = (props) => {
    return (
        <HeaderWrapper>
            <div className='header_bottom'></div>
            <HeaderTop scroll={props.scroll}/>
            <HeaderMiddle />
        </HeaderWrapper>
    )
}

export default Header
