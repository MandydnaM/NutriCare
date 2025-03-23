import React from 'react';
import './hero.css'
import Header from '../header/Header'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import hero_image_back2 from "../../assets/hero_image_back2.png"
import Heart from "../../assets/heart.png"
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {
    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false;

    return (
        <div className='hero' id='hero'>
            <div className="blur blur-h"></div>
            <div className="leftside">
                <Header />

                <div className="herotext">
                    <div>
                        <span >Fuel your</span>
                    </div>
                    <div>
                        <span>Optimal Health</span>
                    </div>
                    <div>
                        <span>Here we guide you to nourish your body, enhance your well-being, and achieve lasting health</span>
                    </div>
                </div>

                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={132} start={80} delay='4' preFix='+' />
                        </span>
                        <span>expert nutritionists</span>
                    </div>
                    <div>
                        <span><NumberCounter end={1539} start={1400} delay='4' preFix='+' /></span>
                        <span>clients transformed</span>
                    </div>
                    <div>
                        <span><NumberCounter end={32} start={10} delay='4' preFix='+' /></span>
                        <span>custom meal plans</span>
                    </div>
                </div>

                <div className="herobuttons">
                    <button className='btn'>start today</button>
                    <button className='btn'>learn more</button>
                </div>
            </div>
            <div className="rightside">
                <button className='btn'>Join Now</button>

                <motion.div
                    initial={{ right: '-2rem' }}
                    whileInView={{ right: '2rem' }}
                    transition={transition}
                    className='blog'>
                    <h2>Our Blogs</h2>
                    <a href="#"><span >Weight Loss</span></a>
                    <a href="#"><span>Mindful Eating</span></a>
                    <a href="#"><span>Understanding Macronutrients</span></a>
                    <a href="#"><span>Healthy Snacks on the Go</span></a>
                </motion.div>

                <img src={hero_image} alt="" className='hero-image' />
                <motion.img
                    initial={{ left: '-5rem' }}
                    whileInView={{ left: '-15rem' }}
                    transition={transition}
                    src={hero_image_back} alt="" className='hero-image-back' />

                <motion.div
                    initial={{ right: '37rem' }}
                    whileInView={{ right: '28rem' }}
                    transition={transition}
                    className="calories">
                    <img src={hero_image_back2} alt="" />
                    <div>

                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero;
