import React from 'react'
import cardItems from '../../../constants/CardItems'
import Button from '../../common/button/Button'
import './card.scss'

const Card = () => {
    let getCardItems = () =>{
        if(cardItems.length === 0) return null

        return cardItems.map((card, index)=>{
            return (
                <div key={index + card.titleCard} className='card_container'>
                    <div className='top_card'>
                        <span className='price_container'><h1 className='price'>{card.price.price}</h1>{card.price.month}</span>
                        <h3 className='title'>{card.titleCard}</h3>
                        <p className='sub_title'>{card.subTitleCard}</p>
                    </div>
                    <div className='middle_card'>
                        {card.subject &&
                            card.subject.map((item, index2)=>{
                                return <p key={index2}>{item}</p>
                            })
                        }
                    </div>
                    <div className='bottom_card'>
                        <Button text={card.btnText} />
                        {card.isTrail && <span className='trail'>{card.trailText}</span>}
                    </div>
                </div>
            )
        })
    }

    return (
        <div className='card_wrapper'>
            {getCardItems()}
        </div>
    )
}

export default Card
