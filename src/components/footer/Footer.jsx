import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer__logo'>NAZARENO RIOS</a>

      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/nazareno.rios.1/" rel='noreferrer' target='_blank'><FaFacebookF/></a>
        <a href="https://www.instagram.com/nazarenorios1/" rel='noreferrer' target='_blank'><FiInstagram/></a>
        <a href="https://twitter.com/nazareno_rios1" rel='noreferrer' target='_blank'><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Nazareno Rios. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer