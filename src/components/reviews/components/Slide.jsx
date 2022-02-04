import React from 'react'
import { Slide } from 'pure-react-carousel';
import Stars from '../../common/stars/Stars';

const SlideViewer = ({item,index}) => {
    return (
        <Slide index={index}>
           
            <div className='stars'>
                <Stars countStar={item.stars}/>
            </div>
            <h3 className='title'>{item.title}</h3>
            <p className='sub_title'>{item.review}</p>
            <div className='bottom'>
                <img src={item.avatar} alt={item.name}/>
                <div className='text_container'>
                    <h4>{item.name}</h4>
                    <p>{item.worker}</p>
                </div>
            </div>
        </Slide>
    )
}

export default SlideViewer
