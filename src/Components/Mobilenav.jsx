import React, { useState,useContext } from 'react'
import { NavLink } from 'react-router-dom'
import close from "../assets/shared/icon-close.svg"
import { MyContext } from './MyContext'
export const Mobilenav = () => {
    const {setToggleview,toggleview}=useContext(MyContext)
    return (
        <section id="hide" className={toggleview?`mobview `:"mobview animate"} >
            
            <div className='close'>
                <img onClick={()=>setToggleview(false)} src={close} alt="close" />
            </div>
            <nav className='mobilenav'>
                <ul>
                    <li><NavLink  onClick={()=>setToggleview(false)} className={({ isActive }) => isActive ? "outline" : null} to="/">00 Home</NavLink ></li>
                    <li><NavLink onClick={()=>setToggleview(false)} className={({ isActive }) => isActive ? "outline" : null} to="/destination">01 Destination</NavLink ></li>
                    <li><NavLink onClick={()=>setToggleview(false)} className={({ isActive }) => isActive ? "outline" : null} to="/crew">02 Crew</NavLink ></li>
                    <li><NavLink onClick={()=>setToggleview(false)} className={({ isActive }) => isActive ? "outline" : null} to="/technology">03 Technology</NavLink ></li>
                </ul>
            </nav>
        </section>
    )
}
