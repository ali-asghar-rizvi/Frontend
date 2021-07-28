import React from 'react'
import {Link} from 'gatsby'

const Footer = () => {
    return (
        <div className="container">
            <div className="row">

                <div className="col-lg-4">
                    <ul>
                        <li><Link to="/">Home Page</Link></li>
                        <li><Link to="/product">Product Page</Link></li>
                        <li><Link to="/blog">Blog Page</Link></li>
                        <li><Link to="/blog">Contact Page</Link></li>
                    </ul>
                </div>


                <div className="col-lg-4">
                    <ul>
                        <li><Link to="/">Home Page</Link></li>
                        <li><Link to="/product">Product Page</Link></li>
                        <li><Link to="/blog">Blog Page</Link></li>
                        <li><Link to="/blog">Contact Page</Link></li>
                    </ul>
                </div>

                <div className="col-lg-4">
                    <ul>
                        <li><Link to="/">Home Page</Link></li>
                        <li><Link to="/product">Product Page</Link></li>
                        <li><Link to="/blog">Blog Page</Link></li>
                        <li><Link to="/blog">Contact Page</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer


