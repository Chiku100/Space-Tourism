import React from 'react'
import crew from "../assets/crew/image-douglas-hurley.png"
import { LazyLoadImage } from "react-lazy-load-image-component"
export const Members = ({ photo, role, name, info }) => {
    return (
        <section className='members'>
            <div>
                <h3>{role || "Commander"}</h3>
                <h4>{name || "Douglas Hurley"}</h4>
                <p>{info || "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."}</p>
            </div>
            <div className='photu'>
                <LazyLoadImage className='crew_image' src={photo || crew} alt="crew_image" />
            </div>
        </section>
    )
}
