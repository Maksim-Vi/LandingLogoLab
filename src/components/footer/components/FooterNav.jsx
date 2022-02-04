import React from 'react'
import NavLinks from '../../../utils/NavLinks'

const FooterNav = (props) => {
    return (
        <div className='footer_nav_container'>
            {NavLinks.map((link,index)=>{
              return <span className='link' key={link.title + index} onClick={()=>{props.scroll(link.url)}}>{link.title}</span>
           })}
        </div>
    )
}

export default FooterNav
