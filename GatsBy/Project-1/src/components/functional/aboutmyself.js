import React from 'react'
import { Link } from 'gatsby';

const Aboutmyself = () => {
    return (

        <section className="about-myself">
            <div className="container">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <h1 id="About-me">About Me</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                            into electronic typesetting.</p>
                                <div className="banner-buttons-main">
                                <Link  to="/contact/">Contact Me</Link>
                                </div>
                        </div>
                    </div>
            </div>
        </section>
    )
}


export default Aboutmyself;