import React from 'react'
import './features.scss'
import FeaturesFirstSection from './components/FeaturesFirstSection'
import FeaturesSecondSection from './components/FeaturesSecondSection'

const Features = () => {
    return (
        <div className='features'>
          <FeaturesFirstSection />
          <FeaturesSecondSection />
        </div>
    )
}

export default Features
