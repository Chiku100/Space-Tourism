import React from 'react'
import moon from "../assets/destination/image-europa.png"
import { LazyLoadImage } from 'react-lazy-load-image-component'
export const Europa = () => {
  return (
    <div className='parallel'>
    <div className='roteuropa'>
      <LazyLoadImage className='rotate' src={moon} alt="moon" />
    </div>
    <div>
      <h3>EUROPA</h3>
      <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
      <hr className='planets' />
      <div className='masterinfo'>
        <div className='info'>
          <p> AVG. DISTANCE</p>
          <p>628 MIL. KM</p>
        </div>
        <div className='info'>
          <p> EST. TRAVEL TIME</p>
          <p>3 YEARS</p>
        </div>
      </div>
    </div>
    </div>
  )
}
