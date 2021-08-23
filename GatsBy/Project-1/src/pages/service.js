import React from 'react'
import { DiAndroid,DiJira } from "react-icons/di";
import { IoCodeSlash } from "react-icons/io5";
import { RiToolsFill } from "react-icons/ri";
import { SiCodio } from "react-icons/si";

import { CgListTree } from "react-icons/cg";

import Layout from '../components/common/layout'


const Services = () => {

    return (
        <Layout>
            <section className="Service-Section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="service-content">
                                <h6>Welcome </h6>
                                <h1>" We Provide the Perfect Solution</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-section-cart">
                 <div className="container">
                    <div className="row">
                            <div className="col-md-6">
                                    <h2>WE SHAPE THE PERFECT SOLUTIONS</h2>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. 
                                    It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
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
                                <div className="service-card">
                                <span> <IoCodeSlash /></span>
                                 <h4>WEB <br /> DEVELOPMENT</h4>
                                </div>
                             </div>  

                             <div className="col-md-3">
                                <div className="service-card">

                                <span> <RiToolsFill /></span>
                               
                                    <h4>Video <br />  Editing</h4>
                                </div>
                             </div>    


                             <div className="col-md-3">
                                <div className="service-card">
                                    <span><DiAndroid /></span>
                                    <h4>Application <br /> DEVELOPMENT</h4>
                                </div>
                             </div>  

                             <div className="col-md-3">
                                <div className="service-card">
                                
                                        <span><SiCodio /></span>
                                        <h4>Content <br /> Management</h4>
                                
                                </div>
                             </div>    



        

                
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Services
