import React from 'react'
import Divider from '../common/drawer/Divider'
import './buy.scss'
import Card from './components/Card'
import Switch from './components/Switch'

const BayProduct = () => {
    return (
        <div id='pricing' className='buy_product_container'>
            <h2 className='buy_product_title'>Get awesome features, without extra charges</h2>
            <p className='buy_product_text'>The rise of mobile devices transforms the way we consume information entirely
                                            and the world's most elevant channels such as Facebook.</p>

            <div className='buy_product_content_container'>
                <Switch />
                <Card />
            </div>
            <Divider />
        </div>
    )
}

export default BayProduct
