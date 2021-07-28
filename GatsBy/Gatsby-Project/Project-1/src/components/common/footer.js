import React from 'react'
import {Link}  from 'gatsby'
import { FiPhone} from "react-icons/fi";
import { FaEnvelope} from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";



const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="footer-content">
                            <h2>QUICK LINKS</h2>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/product">Product</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/overview">Overview</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-content">
                            <h2>SUPPORT</h2>
                            <ul>
                                <li>Email</li>
                                <li>Privacy Policy</li>
                                <li>FDA Disclaimer</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-content">
                            <h2>SERVICES</h2>
                            <ul>
                                <li>Design</li>
                                <li>Development</li>
                                <li>Testing</li>
                                <li>Deployment</li>
                            </ul>
                        </div>
                    </div>




                    <div className="col-lg-3">
                        <div className="footer-content">
                            <h2>Get In Touch</h2>
                            <ul>
                                <li><span><FiPhone /></span> +92 300 926-9560</li>
                                <li><span><FaEnvelope /></span> ahsan_wins@outlook.com</li>
                                <li><span><FaLocationArrow /></span> Main Tariq Road S.M.S </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="copyright">
                            <h6>© 2021 BestBuy Speciality Inc. All rights reserved</h6>
                        </div>
                    </div>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer


