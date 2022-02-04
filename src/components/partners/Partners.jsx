import React from 'react'
import './partners.scss'
import partnersContent from '../../constants/PartnersContent'

const Partners = () => {
    return (
        <div className='partners_container'>
            <h3 className='partners_title'>Trusted by companies like</h3>
            <div className='partners_logo_container'>
                {partnersContent.map(logo=>{
                    return <img className='logo_img' key={logo.key} src={logo.imgUrl} alt={logo.title}/>
                })}
            </div>
        </div>
    )
}

export default Partners
