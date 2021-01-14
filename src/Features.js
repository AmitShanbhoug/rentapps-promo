import React from 'react'
import "./Features.css"

function Features() {
    return (
        <div className="features">
            <div className="features-title" id="/features">Features</div>
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
                    <div className="features-subtitle">No  Ghosting</div>
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
                <div className="features-landlords">
                    <div className="features-landlords-title">
                        Landlords
                    </div>
                </div>
                <div className="features-description-orange">
                    <div className="features-subtitle">Stay Connected</div>
                    <div className="features-subtext">
                        Manage all listings and applications through our platform
                    </div>
                    <div className="features-subtitle">Save Valuable Time</div>
                    <div className="features-subtext">
                        Review applications and contact applicants
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
