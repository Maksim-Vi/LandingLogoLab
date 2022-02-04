import React from 'react'
import Logo from '../common/logo/Logo'
import FooterNav from './components/FooterNav'
import Social from './components/Social'
import './footer.scss'

const Footer = (props) => {
    return (
        <div className='footer'>
            <Logo />
            <FooterNav scroll={props.scroll}/>
            <Social />
            <p className='desc'>Copyright© design by Arifur Rahman Tushar 2019. All rights reserved</p>
        </div>
    )
}

export default Footer
