import React from 'react'
import featuresContent from '../../../constants/FeaturesContent'
import '../features.scss'

const FeaturesSecondSection = () => {

    let getFeaturesRender = () => {
        return (
            <div className='feature_bottom_content_container'>
                {featuresContent.map(feature => {
                    if (feature.type !== 'bottom') return null
                    return (
                        <div className='feature_container' key={feature.key}>
                            <img className='feature_img' src={feature.img} alt={feature.title} />
                            <div className='feature_text_container'>
                                <h4 className={`feature_title feature_title_${feature.titelColor}`}>{feature.title}</h4>
                                <p className='feature_text'>{feature.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }


    return (
        <div className='feature_bottom_container'>
            <div className='feature_bottom_text_container'>
                <h3 className='feature_bottom_title'>Smart jackpots that you may love this anytime and anywhere</h3>
                <span className='line' />
                <p className='feature_bottom_text'>The rise of mobile devices transforms the way we
                    consume information entirely and the world's most
                    elevant channels such as Facebook.
                </p>
            </div>
            {getFeaturesRender()}
        </div >
    )
}

export default FeaturesSecondSection
