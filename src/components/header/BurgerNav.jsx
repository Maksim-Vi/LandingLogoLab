import React, { useState } from 'react'
import NavLinks from '../../utils/NavLinks'

const BurgerNav = (props) => {

    const [open, setOpen] = useState(false);

    let toggleLink = (url) =>{
        props.scroll(url)
        setOpen(false)
    }

    return (
        <div className='butger_container'>
            {open
                ? <div className={`Menu ${open && 'MenuActive'}`}>
                    {NavLinks.map((link, index) => {
                        return <span className='link' key={link.title + index} onClick={() => { toggleLink(link.url) }}>{link.title}</span>
                    })}
                </div>
                : null
            }
            <button className={`btnHamburger ${open && 'btnHamburgeActive'}`} onClick={() => setOpen(!open)}>
                <div className={`Line ${open && 'divFActive'}`} />
                <div className={`Line ${open && 'divSActive'}`} />
                <div className={`Line ${open && 'divTActive'}`} />
            </button>
        </div>
    )
}


export default BurgerNav
