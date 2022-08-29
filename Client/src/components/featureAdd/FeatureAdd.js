import React from 'react'
import "./featureAdd.css"
const workCr2p = "./images/prod-imgs/Work-CR2P.png"
const workCr3p = "./images/prod-imgs/Work-CR3P.png"
const workS13p = "./images/prod-imgs/Work-S13P.png"

function FeatureAdd() {
  return (
    <div className='feature-name-container'>
        <div className="inner-container">
            <div className='fead-text-content'>
                <h2>EGM Now Carries Work Wheels!</h2>
                <p><a href="/products">Shop Here!</a></p>
            </div>
            <img className="work-image-1" src={process.env.PUBLIC_URL + workCr2p} alt="Work Wheel" />
            <img className="work-image-2" src={process.env.PUBLIC_URL + workCr3p} alt="Work Wheel" />
            <img className="work-image-3" src={process.env.PUBLIC_URL + workS13p} alt="Work Wheel" />
        </div>
    </div>
  )
}

export default FeatureAdd