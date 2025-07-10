import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img 
              src={assets.pol}
              alt="Canteen logo featuring a stylized food symbol, representing a welcoming and home-like dining experience" 
            />
            <p>Established in 2015, our canteen has been serving as the culinary backbone of our hostel community. We understand that being away from home can be challenging, which is why we strive to create meals that remind you of home while introducing you to new flavors and experiences.

Our dedicated team of chefs and staff work tirelessly to ensure every meal is prepared with care, using fresh ingredients and traditional cooking methods that preserve both nutrition and taste</p>
            <div className="footer-social-icons">
                <img 
                  src={assets.facebook_icon} 
                  alt="Facebook logo, links to the company Facebook page" 
                />
                <img 
                  src={assets.twitter_icon} 
                  alt="Twitter logo, links to the company Twitter profile" 
                />
                <img 
                  src={assets.linkedin_icon} 
                  alt="LinkedIn logo, links to the company LinkedIn page" 
                />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+918954307008</li>
                <li>contact@Hritik.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 - All Right Reserved.</p>
    </div>
  )
}

export default Footer
