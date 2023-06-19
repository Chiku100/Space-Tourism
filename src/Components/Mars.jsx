import React from 'react'
import moon from "../assets/destination/image-mars.png"
import { LazyLoadImage } from 'react-lazy-load-image-component'
export const Mars = () => {
  return (
    <div className='parallel'>
    <div className='rotmars'>
      <LazyLoadImage className='rotate' src={moon} alt="moon" />
    </div>
    <div>
      <h3>MARS</h3>
      <p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
      <hr className='planets' />
      <div className='masterinfo'>
        <div className='info'>
          <p> AVG. DISTANCE</p>
          <p>225 MIL. KM</p>
        </div>
        <div className='info'>
          <p> EST. TRAVEL TIME</p>
          <p>9 MONTHS</p>
        </div>
      </div>
    </div>
    </div>

  )
}
