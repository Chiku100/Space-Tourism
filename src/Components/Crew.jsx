import React, { useState } from 'react'
import data from "../data.json"
import { Members } from './Members'
import anousheh from "../assets/crew/image-anousheh-ansari.png"
import douglas from "../assets/crew/image-douglas-hurley.png"
import victor from "../assets/crew/image-victor-glover.png"
import mark from "../assets/crew/image-mark-shuttleworth.png"

export const Crew = () => {
    const crews = data.crew
    const [crewData, setCrewData] = useState({ role: "", name: "", photo: "", info: "" })
    return (
        <article className='crew'>
            <div className='bgc'></div>
            <h2>01 Meet Your crew</h2>
            <section >
                <Members info={crewData.info} role={crewData.role} name={crewData.name} photo={crewData.photo} />
            </section>
            <div className='btns'>
                <button onClick={() => setCrewData({ role: crews[0].role, name: crews[0].name, photo: douglas, info: crews[0].bio })}></button>
                <button onClick={() => setCrewData({ role: crews[1].role, name: crews[1].name, photo: mark, info: crews[1].bio })}></button>
                <button onClick={() => setCrewData({ role: crews[2].role, name: crews[2].name, photo: victor, info: crews[2].bio })}></button>
                <button onClick={() => setCrewData({ role: crews[3].role, name: crews[3].name, photo: anousheh, info: crews[3].bio })}></button>
            </div>
        </article>
    )
}
