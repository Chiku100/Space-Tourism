import React from 'react'
import moon from "../assets/destination/image-moon.png"
import { LazyLoadImage } from 'react-lazy-load-image-component'
export const Moons = () => {

  return (<div className='parallel' >
    <div className='rotmoon'>
      <LazyLoadImage className='rotate' src={moon} alt="moon" />
    </div>
    <div>
      <h3>MOON</h3>
      <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
      <hr className='planets' />
      <div className='masterinfo'>
        <div className='info'>
          <p> AVG. DISTANCE</p>
          <p>384,400 KM</p>
        </div>
        <div className='info'>
          <p> EST. TRAVEL TIME</p>
          <p>3 DAYS</p>
        </div>
      </div>
    </div>
  </div>
  )
}
