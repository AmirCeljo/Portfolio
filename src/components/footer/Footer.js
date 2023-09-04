import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
        <span>Reach out</span>
            <div className='footer-content'>
                <div className='contact'>
                    
                    <p>amir.celjo2@gmail.com</p>
                    <div className='icons'>
                        <Link to='https://www.linkedin.com/in/amir-%C4%8Deljo-38a6361a3/'><FaLinkedin/></Link>
                        <Link to=''><FaFacebook/></Link>
                        <Link to=''><FaInstagram/></Link>

                    </div>
                </div>
                <div className='links'>
                    <Link to='/work'>My Work</Link>
                    <Link to=''>My Resume</Link>
                </div>
            </div>
            <div className='hr'></div>
        </div>
    </div>
  )
}

export default Footer
