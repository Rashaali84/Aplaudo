import React from 'react'
import './DashboardRight.scss'

function DashboardRight() {
    return (
        <div>
            <section>
                <div className="flipbox">
                    <div className="back concert">

                        <a href="#" target="_blank">Enter!</a>
                    </div>
                    <div className="front">
                        <h2>Concert</h2>
                        <i className="fa fa-fort-awesome"></i>
                    </div>
                </div>

                <div className="flipbox">
                    <div className="back profile">
                        <a href="#" target="_blank">Enter!</a>
                    </div>
                    <div className="front">
                        <h2>Update Profile</h2>
                        <i className="fa fa-id-card"></i>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default DashboardRight