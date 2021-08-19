import React, { Component } from 'react'
import Slider from "react-slick";
import { Link  } from 'gatsby';



export default class Home extends Component {

render() {
  const settings = {
      dots: false,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000

  }

  return (
 
          <Slider {...settings}>


        <section className="Home-Banner Home-Banner-2">
          <div className="container">
             <div className="row">
                 <div className="col-md-10 mx-auto">
                    <div class="Home-Banner-Content">
                      <h1>WE DEVELOP UNIQUE DIGITAL EXPERIENCES THAT ARE BOTH ENGAGING AND CREATIVE.</h1>
                      <h2>The art of combining exceptional design with perfect execution.</h2>
                      <div className="banner-buttons-main">
                      <Link  to="#">DISCOVER NOW</Link>
                      </div>
                    </div>
                    
                 </div>
             </div>
          </div>
        </section>

        <section className="Home-Banner Home-Banner-3">
          <div className="container">
             <div className="row">
                 <div className="col-md-10 mx-auto">
                 <div class="Home-Banner-Content">
                      <h1>WE DEVELOP UNIQUE DIGITAL EXPERIENCES THAT ARE BOTH ENGAGING AND CREATIVE.</h1>
                      <h2>The art of combining exceptional design with perfect execution.</h2>
                      <div className="banner-buttons-main">
                      <Link  to="#">DISCOVER NOW</Link>
                      </div>
                 </div>
                 </div>
             </div>
          </div>
        </section>


        <section className="Home-Banner ">
          <div className="container">
             <div className="row">
                 <div className="col-md-10 mx-auto">
                 <div class="Home-Banner-Content">
                      <h1>WE DEVELOP UNIQUE DIGITAL EXPERIENCES THAT ARE BOTH ENGAGING AND CREATIVE.</h1>
                      <h2>The art of combining exceptional design with perfect execution.</h2>
                      <div className="banner-buttons-main">
                        <Link  to="#">DISCOVER NOW</Link>
                      </div>
                      </div>
                 </div>
             </div>
          </div>
        </section>


        </Slider>
  
  )
 }
}



















