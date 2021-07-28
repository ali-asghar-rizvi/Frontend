import React from 'react'
import { Link } from 'gatsby'
import LOGO from '../../images/logo.png'
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';



const Navbar = () => {
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <div class="logo">
                        <a href="index.php"><img src={LOGO} className="img-fluid" /> </a>
                    </div>
                </div>
                <div class="col-md-5">
                        <ul class="Website-Navbar">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/overview">Overview</Link></li>
                            <li><Link to="/contact-us">Contact us</Link></li>
                        </ul>
                </div>
                <div class="col-md-4">
                    <div class="row">
                        <div class="col-md-6">
                            <form className="Header-Search-Bar" >
                                <input type="search" placeholder="Enter Your Search" />
                                <span>  <FaYoutube /> </span>
                            </form>
                        </div>
                        <div class="col-md-6">
                            <a href="javascript:;"><span> <FaFacebookF /> </span></a>
                            <a href="javascript:;"><span> <FaInstagram /> </span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar



