import React from 'react'
import { assets } from '../../assets/assets'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-left">
                <img className='logo-bottom' src={assets.logo_bottom} alt="" />
                <p>Food prep is a full-stack project designed for hands-on teaching,
                    helping students learn full-stack development. it's used by faceprep.
                    an ed-tech company focused on equipping students with the skills to 
                    achieve their carrer aspirations.
                    <div className="footer-sociaal-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </p>
            </div>
            <div className="footer-center">
                <h2>Company</h2>
                <li>Home</li>
                <li>About Us</li>
                <li>Courses</li>
                <li>Reviews</li>
            </div>
            <div className="footer-right">
                <h2>Get in touch</h2>
                <ul>
                    <li>+91 88855 85152</li>
                    <li>enquiry@swiggy.in</li>
                </ul>
            </div>
            <hr />
            <p className='footer-copyright'>Copyrights 2024 © FoodPrep.All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer