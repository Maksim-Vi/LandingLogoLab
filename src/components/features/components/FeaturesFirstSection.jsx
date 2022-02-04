import React from 'react'
import featuresImg from '../../../assetss/feature/phone_group.png'
import featuresContent from '../../../constants/FeaturesContent'

const FeaturesFirstSection = () => {

    let getFeaturesRender = () =>{
        return (
            featuresContent.map(feature=>{
                if(feature.type !== 'top') return null
                return (
                    <div className='feature_container' key={feature.key}>
                        <img className='feature_img' src={feature.img} alt={feature.title}/>
                        <div className='feature_text_container'>
                            <h4 className={`feature_title feature_title_${feature.titelColor}`}>{feature.title}</h4>
                            <p className='feature_text'>{feature.text}</p>
                        </div>
                    </div>
                )
            })
        )
    }

    return (
        <div className='features_top_container'>
            <img className='features_img' src={featuresImg} alt='features_img'/>
            <div className='features_content_container'>
                <h2 className='features_title'>Awesome apps features</h2>
                <p className='features_text'>Increase productivity with a simple to-do app. app for managing your personal budgets.</p>
                <div className='features_wrapper'>
                    {getFeaturesRender()}
                </div>
                
            </div>
        </div>
    )
}

export default FeaturesFirstSection
