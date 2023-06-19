import React from 'react'
import { Link } from 'react-router-dom'
export const Home = () => {
    return (
        <article className='home'>
            <div className='bgh'></div>
            <section>
                <h2>So, you want to travel to <span>Space</span> </h2>
                <p>
                    Let’s face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we’ll give you a truly out of this world experience!
                </p>
            </section>
            <section>
                <Link to="destination"> <div className='circle'>
                    <b>explore </b>
                </div>
                </Link>
            </section>
        </article>
    )
}
