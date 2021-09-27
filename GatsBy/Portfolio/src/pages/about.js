import React from 'react'
import Layout from '../components/common/layout'
import WhoWeAre from '../images/about-us.jpg'


const About = () => {
    return (
        <Layout>

        <section  className="about-us-main">

            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                    <div className="about-us-main-content">
                        <h1>
                            <span>WELCOME TO AHSAN SHAIKH PRODUCTION</span>
                            We are a creative group
                            of people who design
                            influential brands and
                            digital experiences.
                        </h1>
                    </div>
                    </div>
                </div>
            </div>

        </section>




            <section className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12" >
                            <h1 className="what-we-do">" What We Do </h1>
                        </div>
                        <div className="col-md-6 align-self-center">
                            <div className="about-content">
                                <h1>We create custom website, Web apps and software that delivers on your business goals</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                                into electronic typesetting.</p>
                               
                            </div>
                        </div>


                        <div className="col-md-6">
                            <figure>
                                <img src={WhoWeAre} className="img-fluid" alt="Who We Are Section"/>
                            </figure>
                        </div>
                    </div>
                </div>
                
            </section>
        </Layout>
            )
}

            export default About