import React from 'react'
import { Link } from "react-router-dom";
import "./footer.css"
import { Facebook, Instagram, Youtube, Twitter, Linkedin, Github } from 'react-bootstrap-icons';

function Footer() {
    return (
        <footer className='footer-container'>
            <div className="footer-inner-container">
                <div className="footer-contact-container">
                    <Link to="/" className='egm-icon-footer'></Link>
                    <p>704-613-drft</p>
                    <p>questions@evergreenmotorsports.com</p>
                    <p>123 Apex Ave Seattle WA, 98106</p>
                    <p>Mon-Fri 8AM-6PM PST</p>
                </div>
                <div className="quick-links-container">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className="social-links">
                <a href="/"><Facebook className='social' /></a>
                <a href='/'><Youtube className='social'/></a>
                <a href='/'><Instagram className='social'/></a>
                <a href='/'><Twitter className='social'/></a>
            </div>
            <h6>Created by: Dylan Trimble 2022© | <a href='https://www.linkedin.com/in/dylan-trimble/' target="_blank" rel="noopener noreferrer" ><Linkedin/> Linkedin </a> <a href='https://github.com/dylantrimble' target="_blank" rel="noopener noreferrer" ><Github/> Github </a></h6>
        </footer>
    )
}

export default Footer