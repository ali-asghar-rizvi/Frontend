import React from 'react'
import {Link}  from 'gatsby'
import { FiPhone} from "react-icons/fi";
import { FaEnvelope} from "react-icons/fa";



const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="footer-content">
                            <h2>QUICK LINKS</h2>
                            <ul>
                                <li><Link to="/" >Home</Link></li>                   
                                <li><Link to="/about" >About</Link></li>
                                <li><Link to="/service" >Service</Link></li>
                                <li><Link to="/blog" >Blog</Link></li>
                                <li><Link to="/contact" >Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-content">
                        <h2>SERVICES</h2>
                            <ul>
                                <li>Mockups</li>
                                <li>Psd to Html</li>
                                <li>Animation Website</li>
                                <li>Landing Page</li>
                                <li>Mobile Responsive Page</li>
   
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-content">
                            <h2>SERVICES</h2>
                            <ul>
                                <li>Psd to React</li>
                                <li>Content Management</li>
                                <li>Gatsby Site</li>
                                <li>Complete Dynamic Website</li>
                            </ul>
                        </div>
                    </div>




                    <div className="col-lg-3">
                        <div className="footer-content">
                            <h2>Get In Touch</h2>
                            <ul>
                                <li><span><FiPhone /></span> +92 300 926-9560</li>
                                <li><span><FaEnvelope /></span> ahsan_wins@outlook.com</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="copyright">
                            <h6>© 2021 AhsanShaikh. All rights reserved</h6>
                        </div>
                    </div>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer


