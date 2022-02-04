import React from 'react'
import Logo from '../../common/logo/Logo'
import Nav from '../Nav'
import '../header.scss'
import BurgerNav from '../BurgerNav'

const HeaderTop = (props) => {
    return (
        <div className='header_top'>
            <Logo />
            <Nav scroll={props.scroll}/>
            <BurgerNav scroll={props.scroll}/>
        </div>
    )
}

export default HeaderTop
