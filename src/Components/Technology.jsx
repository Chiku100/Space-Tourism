import React,{useEffect, useState} from 'react'
import data from "../data.json"
import launch from "../assets/technology/image-launch-vehicle-landscape.jpg"
import capsule from "../assets/technology/image-space-capsule-landscape.jpg"
import spaceport from "../assets/technology/image-spaceport-landscape.jpg"
import { Techpage } from './techpage'
export const Technology = () => {
    const techs = data.technology
    const [techData, setTechData] = useState({ name: "", images: "", description: ""})
    
    return (
        <article className='technology'>
            <div className='bgt'></div>
            <h2>03 SPACE LAUNCH 101</h2>
            <section >
                <div className='tech_links'>
                    <button onClick={()=>setTechData({name:techs[0].name,images:launch,description:techs[0].description})} className='btn'>1</button>
                    <button onClick={()=>setTechData({name:techs[1].name,images:spaceport,description:techs[1].description})} className='btn'>2</button>
                    <button onClick={()=>setTechData({name:techs[2].name,images:capsule,description:techs[2].description})} className='btn'>3</button>
                </div>
                <div className='tech_page'>
                    <Techpage name={techData.name}  images={techData.images} description={techData.description}/>
                </div>
                
            </section>

        </article>
    )
}
