import React from 'react'
import { Outlet,  NavLink } from 'react-router-dom'
import { Moons } from './Moons'
import data from "../data.json"
export const Destination = () => {


    return (
        <article className='destination'>
            <div className='bgd'></div>
            <h2>01 Pick your destination</h2>
            <section >
                <nav className='navdestination'>
                    <li><NavLink end className={({isActive})=> isActive?"outline":null} to="">Moon</NavLink></li>
                    <li><NavLink className={({isActive})=> isActive?"outline":null} to="mars">mars</NavLink></li>
                    <li><NavLink className={({isActive})=> isActive?"outline":null} to="europa">europa</NavLink></li>
                    <li><NavLink className={({isActive})=> isActive?"outline":null} to="titans">titan</NavLink></li>
                </nav>
                <Outlet />
            </section>
        </article>
    )
}
