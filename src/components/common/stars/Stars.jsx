import React from 'react'
import ReactStars from 'react-stars'

const Stars = ({countStar}) => {
    return (
        <ReactStars count={5} value={countStar} edit={false} size={24} color2={'#ffd700'} />
    )
}

export default Stars
