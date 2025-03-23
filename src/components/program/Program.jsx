import React from 'react'
import './program.css'
import { programsData } from '../../data/programsData';
import Marquee from "react-fast-marquee";

const Program = () => {
    return (
        <div className="programs" id='programs'>
            <div className="programs-header">
                <h1>Features</h1>
                <p>Welcome to the Feature Section of NutriCare, your ultimate destination for all things nutrition and wellness.</p>
            </div>

            <div className="program-categories">
                <Marquee>
                    {programsData.map((program) => (
                        <div className="category">
                            <img src={program.image} alt="" />
                            <span>{program.heading}</span><span>{program.details}</span>
                            <div className="join-now">
                                <button className='btn'>Join Now</button>
                            </div>
                        </div>
                    ))}
                </Marquee>

            </div>
        </div>
    )
}

export default Program