import React from 'react'
import './designed.scss'
import designedImg from './../../assetss/designed/designed-img.png'
import Button from '../common/button/Button'

const DesignedWithBuild = () => {
    return (
        <div className='designed_container'>
            <img className='designed_img' src={designedImg} alt='img_designed'/>
            <div className='text_container'>
                <h3 className='title'>Designed & built by the latest code integration</h3>
                <p className='content_text'>The rise of mobile devices transforms the way we
                    consume information entirely and the world's most
                    elevant channels such as Facebook.
                </p>
                <Button text='Try to free'/>
            </div>
        </div>
    )
}

export default DesignedWithBuild
