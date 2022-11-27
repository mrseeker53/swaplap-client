import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaLaptop } from 'react-icons/fa';
import logo from '../../../assets/logo.png';

const Footer = () => {
    return (
        <footer
            className="p-10 bg-accent">
            <div className='footer lg:pl-20'>
                <div>
                    <span className="footer-title">Connect</span>
                    {/* Added social media with icons */}
                    <Link to="/blog" className="link link-hover flex hover:text-secondary">
                        <FaFacebook className='mr-2 mt-0.5' /> Facebook
                    </Link>
                    <Link to="/blog" className="link link-hover flex hover:text-secondary">
                        <FaInstagram className='mr-2 mt-0.5' /> Instagram
                    </Link>
                    <Link to="/blog" className="link link-hover flex hover:text-secondary">
                        <FaYoutube className='mr-2 mt-0.5' /> Youtube
                    </Link>
                    <Link to="/blog" className="link link-hover flex hover:text-secondary">
                        <FaWhatsapp className='mr-2 mt-0.5' /> Whatsapp
                    </Link>
                </div>
                <div>
                    <span className="footer-title">Categories</span>
                    <Link to="/support" className="link link-hover flex hover:text-secondary"><FaLaptop className='mr-2 mt-0.5' /> ASUS</Link>
                    <Link to="/support" className="link link-hover flex hover:text-secondary"><FaLaptop className='mr-2 mt-0.5' /> DELL</Link>
                    <Link to="/support" className="link link-hover flex hover:text-secondary"><FaLaptop className='mr-2 mt-0.5' /> HP</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to="/advertise" className="link link-hover hover:text-secondary">Advertise</Link>
                    <Link to="/support" className="link link-hover hover:text-secondary">Support</Link>
                    <Link to="/blog" className="link link-hover hover:text-secondary">Blog</Link>
                    <Link to="/login" className="link link-hover hover:text-secondary">Login</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to="/" className="link link-hover hover:text-secondary">Terms of use</Link>
                    <Link to="/" className="link link-hover hover:text-secondary">Privacy policy</Link>
                    <Link to="/" className="link link-hover hover:text-secondary">Cookie policy</Link>
                </div>
                <Link to="/">
                    <img className='pl-8' src={logo} alt="" />
                    <p className='text-5xl font-bold mt-[-14px] text-primary-focus hover:text-primary'>Swaplap</p>
                </Link>
            </div>
            <div className='text-center mt-32'>
                {/* Dynamic date */}
                <p>Copyright © {new Date().getFullYear()}  - All rights reserved | mrseeker</p>
            </div>
        </footer>

    );
};

export default Footer;