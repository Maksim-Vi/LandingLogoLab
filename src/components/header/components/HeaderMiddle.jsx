import React from 'react'
import '../header.scss'
import phoneImg from '../../../assetss/header/phone.png'
import Button from '../../common/button/Button'

const HeaderMiddle = () => {

    return (
        <div className='header_middle'>
            <div className='header_text_container'>
                <span className='mark'>#1 Editiors Choice App of 2020</span>
                <h1 className='title'>Best app for your modern lifestyle</h1>
                <p className='text'>Increase productivity with a simple to-do app. app for
                    managing your personal budgets.
                </p>
                <div className='buttons_container'>
                    <Button text='Try to free'/>
                    <a href={'/'}>watch demo video</a>
                </div>
            </div>
            <img className='header_phone_img' src={phoneImg} alt='phone'/>
        </div>
    )
}

export default HeaderMiddle
