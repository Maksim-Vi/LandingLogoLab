import React from 'react'
import facebook from '../../../assetss/footer/facebook.png'
import inst from '../../../assetss/footer/inst.png'
import git from '../../../assetss/footer/git.png'
import tritt from '../../../assetss/footer/tritt.png'

const Social = () => {

    return (
        <div className='social_container'>
            <img src={facebook} alt='f'/>
            <img src={git} alt='f'/>
            <img src={inst} alt='f'/>
            <img src={tritt} alt='f'/>
        </div>
    )
}

export default Social
