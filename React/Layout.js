import React from 'react'
import { Footer, Header } from '../components'

const Layout = (props) => {
  return (
   <>
    <Header />
       <div className="content">
            {props.children}
        </div> 
    <Footer />
   </>
  )
}

export default Layout
