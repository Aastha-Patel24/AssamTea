import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import logo from '../assets/images/LOGO.png';
import location from '../assets/images/location.svg';
import mail from '../assets/images/mail.svg';
import phone from '../assets/images/phone.svg';


const Footer = () => (
    <footer>
        <div className='foot-logo'>
            <img src={logo} alt="Assam Tea Logo" width="150" height="100" className="me-2" />
        </div>
        <div className='contact'>
            <div className='foot-heading'>
                <h1> Contact Us </h1>
            </div>
            <div className='foot-content'>
                <img src={location} alt="Assam Tea Logo" id='location' />
                <p id='foot-location'>
                    AssamTeaCo. 123 Guwahati, <br/>
                    Assam, India
                </p>
                <img src={mail} alt="Assam Tea Logo" id='mail' />
                <p id='foot-mail'>
                    AssamTeaCo.@example.com
                </p>
                <img src={phone} alt="Assam Tea Logo" id='phone' />
                <p id='foot-phone'>
                    +911234567890
                </p>
            </div>
        </div>
        <div className='social'>
            <div className='foot-heading'>
                <h1> Follow Us </h1>
            </div>
            <div className='foot-content'>
                <a href='#'> Instagram </a>
                <a href='#'> Facebook </a>
                <a href='#'> Twitter </a>
            </div>
        </div>
        <div className='quick'>
            <div className='foot-heading'>
                <h1> Quick Links </h1>
            </div>
            <div className='foot-content'>
               <a href='#'> Privacy </a>
               <a href='#'> Terms </a>
               <a href='#'> FAQ </a> 
            </div>
        </div>
    </footer>
);

export default Footer;