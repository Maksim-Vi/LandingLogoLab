import React from 'react'
import chooseApp from '../../../constants/ChooseApp'
import '../choose.scss'

const ChooseBlocksContainer = () => {
    return (
        <div className='choose_app_container'>
            {chooseApp.map(app => {
                return (
                    <div className='choose_app' key={app.key}>
                        <img className='choose_app_img' src={app.img} alt={app.title} />
                        <div className='choose_app_text_container'>
                            <h4 className='choose_app_title'>{app.title}</h4>
                            <p className='choose_app_text'>{app.text}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ChooseBlocksContainer
