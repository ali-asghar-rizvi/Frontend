import React from 'react'
import { Link } from 'gatsby'
import LOGO from '../../images/logo.png'


const Navbar = () => {
    return (
        <header>
            <div className="container">
                <div className="row Website-Header">
                    <div className="col-md-3">
                        <div className="Website-logo">
                            <figure>
                                <img src={LOGO} className="img-fluid" alt="BestBuy Speciality Website Logo" />
                            </figure>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <ul className="Website-Navbar">
                            <li><Link to="/" activeClassName="active-page">Home</Link></li>
                            <li><Link to="/about" activeClassName="active-page">About us</Link></li>
                            <li><Link to="/blog" activeClassName="active-page">Blog</Link></li>
                            <li><Link to="/product" activeClassName="active-page">Products</Link></li>
                            <li><Link to="/overview" activeClassName="active-page">Overview</Link></li>
                            <li><Link to="/contact" activeClassName="active-page">Contact us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar


