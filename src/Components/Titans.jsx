import React from 'react'
import moon from "../assets/destination/image-titan.png"
import { LazyLoadImage } from 'react-lazy-load-image-component'
export const Titans = () => {
  return (
    <div className='parallel'>
    <div className='rottitan'>
      <LazyLoadImage className='rotate' src={moon} alt="moon" />
    </div>
    <div>
      <h3>TITAN</h3>
      <p>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
      <hr className='planets' />
      <div className='masterinfo'>
        <div className='info'>
          <p> AVG. DISTANCE</p>
          <p>1.6 BIL. KM</p>
        </div>
        <div className='info'>
          <p> EST. TRAVEL TIME</p>
          <p>7 YEARS</p>
        </div>
      </div>
    </div>
</div>
  )
}
