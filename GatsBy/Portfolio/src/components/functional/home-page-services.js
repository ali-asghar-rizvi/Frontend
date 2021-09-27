import React from 'react'
import { DiAndroid,DiJira } from "react-icons/di";
import { IoCodeSlash } from "react-icons/io5";
import { RiToolsFill,RiStarFill } from "react-icons/ri";
import { SiCodio } from "react-icons/si";
import { CgListTree } from "react-icons/cg";
import { MdPhoneIphone } from "react-icons/md";



const HomeServices = () => {

    return (
         
                
                 

            <section className="service-section-cart serive-home-section">
            


                 <div className="container">

                    <div className="row">

                    <div className="col-12 service-content">
                         <h2 className="service-heading">Services</h2>
                    </div>


                            <div className="col-md-3">
                                <div className="service-card ">
                                    <span> <DiJira /></span>
                                    <h4>GRAPHIC <br /> DESIGN</h4>
                                </div>
                             </div>  


                             <div className="col-md-3">
                                <div className="service-card">
                                <span> <CgListTree /></span>
                                 <h4>UX/UI  <br /> DESIGN</h4>                           
                                </div>
                             </div>  


                             <div className="col-md-3">
                                <div className="service-card  ">
                                    <span> <RiStarFill /></span>
                                    <h4>ANIMATION  <br /> WEBSITE</h4>
                                </div>
                             </div>  

                             <div className="col-md-3">
                                <div className="service-card ">
                                    <span> <MdPhoneIphone /></span>
                                    <h4>RESPONSIVE <br /> DESIGN</h4>
                                </div>
                             </div>  



    

                             <div className="col-md-3">
                                <div className="service-card">
                                <span> <IoCodeSlash /></span>
                                 <h4>WEB <br /> DEVELOPMENT</h4>
                                </div>
                             </div>  

          


                             <div className="col-md-3">
                                <div className="service-card">
                                <span><DiAndroid /></span>
                                <h4>APPLICATION <br /> DEVELOPMENT</h4>
                                </div>
                             </div>  

                             <div className="col-md-3">
                                <div className="service-card">
                                <span><SiCodio /></span>
                                <h4>CONTENT <br /> MANAGEMENT</h4>
                                </div>
                             </div>   

                            <div className="col-md-3">
                                <div className="service-card">
                                <span> <RiToolsFill /></span>
                                <h4>WEBSITE <br />  MAINTINANCE</h4>
                                </div>
                             </div>    


                
                    </div>
                </div>
            </section>
   
    )
}

export default HomeServices
