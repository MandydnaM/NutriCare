import React, { useRef } from 'react'
import './join.css'
import email from '../../assets/email.png'
import phone from '../../assets/phone.png'
// import position from '../../assets/position.png'
import GoogleMapComponent from "../googleMapComponent/GoogleMapComponent";

const Join = () => {


    return (
        <div className="join">
            <div className="join-header">
                <h1>Contact Us</h1>
                <p>Our dedicated team is here to assist you and provide the support you need on your nutritional journey. Please don't hesitate to reach out to us using any of the following contact methods</p>
            </div>
            <div className="join-body">
                <div className="join-l">
                    <div className="contact-type">
                        <img src={email} alt="" />
                        <p>support@nutricare.com</p>
                    </div>
                    <div className="contact-type">
                        <img src={phone} alt="" />
                        <p>+49 12345 00000</p>
                    </div>
                </div>
                {/* <div className="contact-type">
                    <img src={position} alt="" />
                    <p>Some Where in the World</p>
                </div> */}
                <div className="join-r">
                    <GoogleMapComponent />
                </div>
            </div>
        </div>
    )
}

export default Join