import React from 'react'
import './home.css'

function Home() {
    return (
        <div>
            <div className="container">
                <div className="secondary-container">
                    <h2 className="title">What is a budget?</h2>
                    <p className="paragraph">A budget is a plan you write down to decide how you will spend your money each month.
                        A budget helps you make sure you will have enough money every month. Without a budget, you might run out of money before your next paycheck.</p>
                    <h3 className="sub-title">A budget shows you:</h3>
                    <li className="list">how much money you make</li>
                    <li className="list">how you spend your money</li>
                </div>
                
                    
                <div className="secondary-container">
                    <h2 className="title">Why do I want a budget?</h2>
                    <h3 className="sub-title">A budget helps you decide:</h3>
                    <li className="list">what you must spend your money on</li>
                    <li className="list">if you can spend less money on some things and more money on other things</li>
                   
                </div>
                <div className="secondary-container">
                    <h2 className="title">Why should I try to save money?</h2>
                    <p className="paragraph">You might need money for an emergency. You also might need to buy something more expensive, like a car. Saving money might help you buy a car, put a security deposit on an apartment, or pay for something else expensive.</p>
                </div>

            </div>
        </div>
    )
}

export default Home
