import React from 'react'
import "./Beta.css"

function Beta() {
    return (
        <div className="beta-container">
            <div className="beta-title">Beta</div>

            <div className="beta-signup">Sign up to receive early access</div>

            <div className="beta-form">
                <input title="Email Address" className="beta-input"/>
                <button className="beta-signup-button">Sign up</button>
            </div>
        </div>
    )
}

export default Beta
