import React from 'react'
import NavLinks from '../../utils/NavLinks'
import Button from '../common/button/Button'

const Nav = (props) => {
    return (
        <div className='links_container'>
           {NavLinks.map((link,index)=>{
              return <span className='link' key={link.title + index} onClick={()=>{props.scroll(link.url)}}>{link.title}</span>
           })}
           <Button text='Try for free' onClickHendler={()=>{console.log('btn click')}}/>
        </div>
    )
}

export default Nav
