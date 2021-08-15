import React from 'react'
import {Link} from "react-router-dom";

function Header() {
    return (
        <div>
            <section id="header">
                <div className="header container">
                    <div className="nav-bar">
                        <div className="brand">
                            <a href="#hero">
                            <h1><span>Green</span>  Panther</h1>
                            </a>
                        </div>
                        <div className="nav-list">
                            <div className="hamburger">
                            <div className="bar"></div>
                            </div>
                            <ul>
                            <li><Link to="/">Home</Link></li>
                            {/* <li><Link to="#services" >Services</Link></li> */}
                            <li><Link to="/tracking" >Start Tracking</Link></li>
                            <li><Link to="/profile" >My Profile</Link></li>
                            <li><Link to="/leaderboard" >LeaderBoard</Link></li>
                            <li><Link to="/login" >Signin</Link></li>
                            <li><Link to="/signup" >Signup</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header
