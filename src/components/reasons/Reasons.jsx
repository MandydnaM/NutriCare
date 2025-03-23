import React from 'react'
import './reasons.css'
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.svg"

const Reasons = () => {
    return (

        <div className="reasons" id='reasons'>
            <div className="reasons-header">
                <h1>Benefits</h1>
                <p>Why you should choose us?</p>
            </div>
            <div className="reasons-body">
                <div className="leftreason">
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                </div>
                <div className="rightreason">
                    <div className="reasondetails">
                        <div>
                            <img src={tick} alt="" />
                            <span>over 140+ certified nutritionists</span>
                        </div>
                        <div>
                            <img src={tick} alt="" />
                            <span>personalized meal plans for faster results</span>
                        </div>
                        <div>
                            <img src={tick} alt="" />
                            <span>1 free consultation for new members</span>
                        </div>
                        <div>
                            <img src={tick} alt="" />
                            <span>trusted by leading health brands</span>
                        </div>
                    </div>

                    <span
                        style={{
                            color: "var(--gray",
                            fontWeight: "normal",
                            textTransform: "uppercase",
                            marginTop: "1rem"
                        }}>
                        our partners
                    </span>

                    <div className="partners">
                        <img src={nb} alt="" />
                        <img src={adidas} alt="" />
                        <img src={nike} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reasons
