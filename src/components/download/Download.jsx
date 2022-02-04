import React from 'react'
import './download.scss'

const Download = () => {
    return (
        <div className='download_container'>
            <div className='download_content'>
                <h2 className='title'>Download our App now !</h2>
                <p className='sub_title'>The rise of mobile devices transforms the way we consume information entirely
                                         and the world's most elevant channels such as Facebook.
                </p>
                <div className='btn_container'>
                    <span className='google_play'/>
                    <span className='app_store'/>
                </div>
            </div>
            <span className='download_img' />
        </div>
    )
}

export default Download
