import React from 'react'
import tech from "../assets/technology/image-launch-vehicle-portrait.jpg"
import {LazyLoadImage } from "react-lazy-load-image-component"
export const Techpage = ({ name, images, description }) => {
    return (
        <div className='page_data'>
            <div>
                <p>THE TERMINOLOGY...</p>
                <h3>{name || "LAUNCH VEHICLE"}</h3>
                <p>{description || "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"}</p>
            </div>
            <div className='tech_img_parent'>
                <LazyLoadImage  className='tech_img' src={images || tech} alt="tech_img" />
            </div>
        </div>
    )
}
