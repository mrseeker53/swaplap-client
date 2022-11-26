import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaLaptop } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer
            className="p-10 bg-accent">
            <div className='footer'>
                <div>
                    <span className="footer-title">Connect</span>
                    {/* Added social media with icons */}
                    <Link to="/blog" className="link link-hover flex">
                        <FaFacebook className='mr-2 mt-0.5' /> Facebook
                    </Link>
                    <Link to="/blog" className="link link-hover flex">
                        <FaInstagram className='mr-2 mt-0.5' /> Instagram
                    </Link>
                    <Link to="/blog" className="link link-hover flex">
                        <FaYoutube className='mr-2 mt-0.5' /> Youtube
                    </Link>
                    <Link to="/blog" className="link link-hover flex">
                        <FaWhatsapp className='mr-2 mt-0.5' /> Whatsapp
                    </Link>
                </div>
                <div>
                    <span className="footer-title">Categories</span>
                    <Link to="/support" className="link link-hover flex"><FaLaptop className='mr-2 mt-0.5' /> ASUS</Link>
                    <Link to="/support" className="link link-hover flex"><FaLaptop className='mr-2 mt-0.5' /> DELL</Link>
                    <Link to="/support" className="link link-hover flex"><FaLaptop className='mr-2 mt-0.5' /> HP</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to="/about" className="link link-hover">About</Link>
                    <Link to="/support" className="link link-hover">Support</Link>
                    <Link to="/blog" className="link link-hover">Blog</Link>
                    <Link to="/login" className="link link-hover">Login</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to="/" className="link link-hover">Terms of use</Link>
                    <Link to="/" className="link link-hover">Privacy policy</Link>
                    <Link to="/" className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <div className='text-center mt-32'>
                {/* Dynamic date */}
                <p>Copyright © {new Date().getFullYear()}  - All rights reserved | mrseeker</p>
            </div>
        </footer>

    );
};

export default Footer;