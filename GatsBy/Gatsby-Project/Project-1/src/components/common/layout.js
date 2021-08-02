import React from 'react'
import Navbar from "./header";
import Footer from "./footer";
import { Fragment } from "react";
import '../../css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Layout = ({ children }) => {

    return (
        <Fragment>
            <Navbar />
              <main>{children}</main>
            <Footer />
        </Fragment>
    )
}

export default Layout
