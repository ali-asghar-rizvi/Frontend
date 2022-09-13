import React from 'react'
import { Footer, Header } from '../components'
import { Outlet } from 'react-router-dom';

const Layout = (props) => {
  return (
   <>
    <Header />
    {/* Tridition way  
       <div className="content">
            {props.children}
        </div> 
     */}
      <Outlet />
    <Footer />
   </>
  )
}

export default Layout
