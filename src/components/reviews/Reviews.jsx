import React from 'react'
import MapUsers from './components/MapUsers'
import SliderViewer from './components/Slider'
import './reviews.scss'

const Reviews = () => {
    return (
        <div id='reviews' className='reviews_wrapper'>
            <MapUsers />
            <div className='review_slider_container'>
                <h3 className='title'>Meet Client Satisfaction by using product</h3>
                <p className='sub_title'>The rise of mobile devices transforms the way we consume.
                    elevant channels such as Facebook.
                </p>
                <SliderViewer />
            </div>
        </div>
    )
}

export default Reviews
