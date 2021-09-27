import React from 'react'
import Navbar from "./header";
import Footer from "./footer";
import '../../css/style.css'
import '../../css/responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Layout = ({ children }) => {

    return (
        <React.Fragment>
            <Navbar />
              <main>{children}</main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout
