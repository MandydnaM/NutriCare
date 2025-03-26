import React, { useState } from 'react'
import './testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.svg'
import rightArrow from '../../assets/rightArrow.svg'
import quote from '../../assets/quote.png'
import ins from '../../assets/ins.png'
import { motion } from 'framer-motion'

const Testimonials = () => {
    const [selected, setSelected] = useState(0)
    const tLength = testimonialsData.length
    const transition = { type: 'spring', duration: 3 }

    return (
        <div className="testimonials" id='testimonials'>
            <div className="test-header">
                <h1>Testimonials</h1>
                <p>Our satisfied clients share their success stories and experiences on their journey to better health and well-being.</p>
            </div>
            <div className="test-body">
                <div className="lefttest">
                    <img src={quote} alt="" />
                    <motion.span
                        key={selected}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ transition }}>
                        {testimonialsData[selected].review}
                    </motion.span>
                    <span>
                        <span style={{ color: "#468671" }}>{testimonialsData[selected].name}</span>{" "}
                        - {testimonialsData[selected].status}
                    </span>
                    <div className="arrows">
                        <div><img src={leftArrow} alt="" onClick={() => {
                            selected === 0
                                ? setSelected(tLength - 1)
                                : setSelected((prev) => prev - 1)
                        }} /></div>
                        <div><img src={rightArrow} alt="" onClick={() => {
                            selected === tLength - 1
                                ? setSelected(0)
                                : setSelected((prev) => prev + 1)
                        }} /></div>
                    </div>
                </div>

                <div className="righttest">
                    <img src={ins} alt="" />
                    <motion.img
                        key={selected}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ transition }}
                        src={testimonialsData[selected].image} alt="" />


                </div>
            </div>
        </div>

    )
}

export default Testimonials