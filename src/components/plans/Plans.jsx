import React from 'react'
import './plans.css'
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/tick.svg';

const Plans = () => {
    return (
        <div className='plansbox' id='plansbox'>
            <div className="blur blur-p1"></div>
            <div className="blur blur-p2"></div>

            <div className="plans-header">
                <h1>Pricing</h1>
                <p>we offer flexible pricing options to accommodate your unique requirements and budget.
                    Choose from our three plans below and take the first step towards a healthier lifestyle</p>
            </div>

            <div className="plans">
                {
                    plansData.map((plan, index) => (
                        <div className="plan" key={index}>
                            {plan.icon}
                            <span>{plan.name}</span>
                            <span>$ {plan.price}</span>

                            <div className="features">
                                {plan.features.map((feature, index) => (
                                    <div className="feature">
                                        <img src={whiteTick} alt="" />
                                        <span key={index}>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div>
                                <span>see more benefits →</span>
                            </div>
                            <button className='btn'>Join Now</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Plans