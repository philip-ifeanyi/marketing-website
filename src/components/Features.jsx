import React from 'react';
import features from '../assets/features';

import './Features.css'


const Features = () => {

  return (
    <div className='container'>
      <h2>Features</h2>
      <div className="feature-container">
        {
          features.map((feature, index) => {
            return (
              <div className='feature' key={index}>
                <img className='feature-icon' src={feature.img} alt="" />
                <h5>{feature.name}</h5>
                <ul className='feature-list'>
                  {
                    feature.specs.map((spec, index) => {
                      return(
                        <span key={index}>{spec}</span>
                      )
                    })
                  }
                </ul>
                <span>{feature.description}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Features