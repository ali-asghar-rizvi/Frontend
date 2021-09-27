import React, { useState } from 'react';
import Layout from '../components/common/layout'


function Contact() {

    const [data, setData] = useState({
        fullname: "",
        email: "",
        sub: "",
        phone: "",
        // country: "",
        // city: "",
        // zip: "",
        msg: ""
    });

    const FormSubmit = () => {
        alert(`Hey ${data.fullname}, Thank You For Contact us, we will get back to you asap  `)
        console.log(data);
    }

    const changeHandler = (event) => {
        let { name, value } = event.target
        setData((prev => {
            return{
                ...prev,
                [name]: value
            };
        }
        )
     )
    }


    return (
        <React.Fragment>
            <Layout>
            <section className="contact">
                <div className="contact-background-color">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 contact-content">
                                <h4>CONTACT</h4>
                                <h1>SEND US MESSAGE</h1>
                                <p>If you have any questions,
                                please click and fill out the form, and we will get back to you ASAP.</p>
                            </div>


                            <div className="col-md-5 contact-form">
                                <form onSubmit={FormSubmit}>
                                    <div className="row">

                                        <div className="col-md-12">
                                        <input type="text"
                                            className="form-control"
                                            name="fullname" value={data.fullname}
                                            onChange={changeHandler}
                                            required
                                            placeholder="Enter your name" />
                                        </div>

                                        <div className="col-md-6">
                                        <input type="email"
                                            className="form-control"
                                            name="email"
                                            value={data.email}
                                            required
                                            onChange={changeHandler}
                                            placeholder="Enter email address" />
                                        </div>

                                        <div className="col-md-6">
                                        <input type="number"
                                            className="form-control"
                                            name="phone"
                                            value={data.phone}
                                            required
                                            onChange={changeHandler}
                                            placeholder="Enter phone number" />
                                        </div>

                                        {/* <div className="col-md-4">
                                        <input type="text"
                                            className="form-control"
                                            name="country"
                                            value={data.country}
                                            required
                                            onChange={changeHandler}
                                            placeholder="Enter your country" />
                                    
                                        </div>



                                        <div className="col-md-4">
                                        <input type="text"
                                            className="form-control"
                                            name="city"
                                            value={data.city}
                                            required
                                            onChange={changeHandler}
                                            placeholder="Enter your city" />
                                        </div>


                                        
                                        <div className="col-md-4"> 
                                        <input type="text"
                                            className="form-control"
                                            name="zip"
                                            value={data.zip}
                                            required
                                            onChange={changeHandler}
                                            placeholder="Enter Postal Code" />
                                        </div>*/}


                                        <div className="col-md-12">
                                        <input type="text"
                                            className="form-control"
                                            name="sub"
                                            value={data.sub}
                                            required
                                            onChange={changeHandler}
                                            placeholder="Enter your subject" />    
                                        </div>



                                        <div className="col-md-12">
                                        <textarea rows="4"
                                            className="form-control"
                                            cols="40"
                                            name="msg"
                                            value={data.msg}
                                            required
                                            onChange={changeHandler}
                                            placeholder="Enter your message"></textarea>
                                        </div>

                                        <div className="send-btn text-center">
                                            <button type="submit">SEND</button>
                                        </div>


                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </Layout>
        </React.Fragment>
    )

}

export default  Contact
