import React, { useState,useContext } from 'react'
import logo from "../assets/shared/logo.svg"
import { NavLink } from 'react-router-dom'
import toggle from "../assets/shared/icon-hamburger.svg"
import close from "../assets/shared/icon-close.svg"
import { MyContext } from './MyContext'
const Header = () => {
  const {setToggleview}=useContext(MyContext)
  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className='toggle'>
        <img onClick={()=>setToggleview(true)} src={toggle} alt="toggle" />
      </div>
      <hr />
      <nav className='Navbar'>
        
        <ul>
          <li><NavLink className={({isActive})=> isActive?"outline":null} to="/">00 Home</NavLink ></li>
          <li><NavLink className={({isActive})=> isActive?"outline":null} to="/destination">01 Destination</NavLink ></li>
          <li><NavLink className={({isActive})=> isActive?"outline":null} to="/crew">02 Crew</NavLink ></li>
          <li><NavLink className={({isActive})=> isActive?"outline":null} to="/technology">03 Technology</NavLink ></li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
