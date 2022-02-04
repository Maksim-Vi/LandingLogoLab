import React from 'react'
import reviewsUser from '../../../constants/reviewsUsers'

const MapUsers = () => {
    return (
        <div className='map_container'>
            {reviewsUser.mapData &&
                reviewsUser.mapData.map((item) => {
                    return <span key={item.id} className='img_avatar' style={item.place}>
                        <img src={item.img} alt='img_avatar'/>
                    </span>
                })
            }
        </div>
    )
}

export default MapUsers
