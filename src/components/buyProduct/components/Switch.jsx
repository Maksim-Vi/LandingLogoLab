import React, { useState } from 'react'
import './switch.scss'

const Switch = () => {

    const [activeSwitch, setActiveSwitch] = useState({
        Monthly: true,
        Annually: false
    })

    let toggleActiveSwitch = (data) =>{
        if(data === 'Monthly'){
            setActiveSwitch({Monthly: true, Annually: false})
        } else {
            setActiveSwitch({Monthly: false, Annually: true})
        }
        
    }

    return (
        <div className='switch_container'>
            <span className={`switch_first ${activeSwitch.Monthly && 'active'}`} onClick={()=>{toggleActiveSwitch('Monthly')}}>Monthly</span>
            <span className={`switch_second ${activeSwitch.Annually && 'active'}`} onClick={()=>{toggleActiveSwitch('Annually')}}>Annually</span>
        </div>
    )
}

export default Switch
