import React from 'react'
import './ultimate.scss'
import phonesImg from '../../assetss/ultimateFeature/Phones.png'
import ultimateFeaturesContent from '../../constants/UltimateFeaturesContent'
import Button from '../common/button/Button'

const UltimateFeatures = () => {

    let getFeaturesRender = () =>{
        return (
            ultimateFeaturesContent.map(feature=>{
                return (
                    <div className='ultimate_feature_container' key={feature.key}>
                        <img className='ultimate_feature_img' src={feature.img} alt={feature.title}/>
                        <div className='ultimate_feature_text_container'>
                            <h4 className='ultimate_feature_title'>{feature.title}</h4>
                            <p className='ultimate_feature_text'>{feature.text}</p>
                        </div>
                    </div>
                )
            })
        )
    }

    return (
        <div className='ultimate_features_container'>
            <div className='ultimate_features_content_container'>
                <h2 className='ultimate_features_title'>Ultimate features that we built</h2>
                <p className='ultimate_features_text'>The rise of mobile devices transforms the way we consume information entirely.</p>
                <div className='ultimate_feature_content_container'>
                    {getFeaturesRender()}
                    <Button text='Try to free'/>
                </div>
            </div>
            <img className='features_img' src={phonesImg} alt='features_img'/>
        </div>
    )
}

export default UltimateFeatures
