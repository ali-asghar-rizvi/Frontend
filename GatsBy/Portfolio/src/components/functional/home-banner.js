import React, { Component } from 'react'
import { Link  } from 'gatsby';
import { FaArrowAltCircleDown } from "react-icons/fa";




export default class Home extends Component {

render() {


  return (
 
         


        <section className="Home-Banner Home-Banner">
          <div className="container">
             <div className="row">
                 <div className="col-md-12 mx-auto">
                    <div class="Home-Banner-Content">
                      <h1>Muhammad Ahsan Sabir Shaikh</h1>
                      <h2>SOFTWARE DEVELOPER FROM PAKISTAN WITH HAVING 3+ YEARS OF EXPERIENCE</h2>
                      <h2>Html, CSS, React, Gatsby, Contentful</h2>
                      <div className="banner-buttons-main">
                      <Link  to="#About-me">KNOW MORE</Link>
                      </div>

                      <div className="Home-Down-Arrow">
                      <a href="#About-me"> <span> <FaArrowAltCircleDown /></span></a>
                      </div>


                    </div>
                    
                 </div>
             </div>
          </div>
        </section>






        
  
  )
 }
}



















