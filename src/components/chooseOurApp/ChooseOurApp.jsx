import React from 'react'
import Divider from '../common/drawer/Divider'
import './choose.scss'
import ChooseBlocksContainer from './components/ChooseBlocksContainer'

const ChooseOurApp = (props) => {
    return (
        <div id='key_features' className='choose_app_container'>
            <Divider />
            <div className='choose_text_container'>
                <h3 className='title'>Why you should choose our app</h3>
                <p className='text'>The rise of mobile devices transforms the way we consume information entirely
                    and the world's most elevant channels such as Facebook.
                </p>
            </div>
            <ChooseBlocksContainer />
        </div>
    )
}

export default ChooseOurApp
