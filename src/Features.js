import React from 'react'
import "./Features.css"

function Features() {
    return (
        <div>
            <div className="features-title">Features</div>

            <div className="features-container">
                <div className="features-description-red">
                    <div className="features-subtitle">One Application</div>
                
                    <div className="features-subtext">
                        With one application, you can apply to all available listings
                    </div>

                    <div className="features-subtitle">No Pesky Fees</div>
                
                    <div className="features-subtext">
                        No hidden or application fees
                    </div>

                    <div className="features-subtitle">Status Update</div>
                
                    <div className="features-subtext">
                        Get instant status updates on your application
                    </div>
                </div>

                <div className="features-renters">
                    <div className="features-renters-title">
                        Renters
                    </div>
                </div>
            </div>

            <div className="features-container">
                <div className="features-renters">
                    <div className="features-renters-title">
                        Landlords
                    </div>
                </div>
                <div className="features-description-orange">
                    <div className="features-subtitle">Stay Organized</div>
                
                    <div className="features-subtext">
                        Manage all applicants on our platform
                    </div>

                    <div className="features-subtitle">Save Time</div>
                
                    <div className="features-subtext">
                        Review, approve, and contact applicants
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
