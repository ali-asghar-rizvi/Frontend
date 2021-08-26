import React from 'react'
import { Link } from 'gatsby'
import { FiPhone} from "react-icons/fi";
import { FaEnvelope ,  FaFacebook} from "react-icons/fa";




const Navbar = () => {
    return (
        <header>
            <div className="container">
                <div className="row Website-Header">
                    <div className="col-md-3">
                        <div className="Website-left">
                         <a href="tel:0300-9269560"> <span><FiPhone /></span> +92 300 926-9560 </a>
                        </div>
                    </div>
                    <div className="col-md-6 mx-auto">
                        <ul className="Website-Navbar">
                            <li><Link to="/" activeClassName="active-page">Home</Link></li>                   
                            <li><Link to="/blog" activeClassName="active-page">Blog</Link></li>
                            <li><Link to="/service" activeClassName="active-page">Service</Link></li>
                            <li><Link to="#skill-section" activeClassName="active-page">Skills</Link></li>
                            <li><Link to="/portfolio" activeClassName="active-page">Portfolio</Link></li>
                            <li><Link to="/about" activeClassName="active-page">Overview</Link></li>
                            <li><Link to="/contact" activeClassName="active-page">Contact</Link></li>
                        </ul>
                    </div>


                    <div className="col-md-3">
                         <div className="Website-right">
                            <a href="https://www.facebook.com/">  <span> <FaFacebook/>  </span>&nbsp;  </a>
                            <a href="mailto:ahsan_wins@outlook.com"> <span><FaEnvelope />  </span> </a> 
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Navbar


