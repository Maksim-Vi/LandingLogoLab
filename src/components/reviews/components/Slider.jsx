import React from 'react'
import { CarouselProvider, Slider, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import reviewsUser from '../../../constants/reviewsUsers';
import SlideViewer from './Slide';

const SliderViewer = () => {
    return (
        <CarouselProvider
            className='slider_container'
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={4}>
            <Slider>
                {reviewsUser.sliderData &&
                    reviewsUser.sliderData.map((item, index)=>{
                        return <SlideViewer key={index} item={item} index={index}/>
                    })
                }
            </Slider>
            <div className='btn_slider_container'>
                <ButtonBack className='prev'>&#8592;</ButtonBack>
                <ButtonNext className='next'>&#8594;</ButtonNext>
            </div>
        </CarouselProvider>
    )
}

export default SliderViewer
