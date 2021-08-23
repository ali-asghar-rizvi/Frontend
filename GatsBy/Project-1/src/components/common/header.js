import React from 'react'
import { Link } from 'gatsby'



const Navbar = () => {
    return (
        <header>
            <div className="container">
                <div className="row Website-Header">
                    <div className="col-md-5">
                        <div className="Website-logo">
                           <h2>Muhammad Ahsan</h2>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <ul className="Website-Navbar">
                            <li><Link to="/" activeClassName="active-page">Home</Link></li>                   
                            <li><Link to="/about" activeClassName="active-page">About</Link></li>
                            <li><Link to="/portfolio" activeClassName="active-page">Portfolio</Link></li>
                            {/* <li><Link to="/skill" activeClassName="active-page">Skills</Link></li> */}
                            <li><Link to="/service" activeClassName="active-page">Service</Link></li>
                            <li><Link to="/blog" activeClassName="active-page">Blog</Link></li>
                            <li><Link to="/contact" activeClassName="active-page">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar


