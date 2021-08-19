import React, { useState } from 'react';
import Layout from '../components/common/layout'


function Contact() {

    const [data, setData] = useState({
        fullname: "",
        email: "",
        phone: "",
        msg: ""
    });

    const FormSubmit = () => {
        alert(`Hello ${data.fullname}, Your Form SuccessFully Submit`)
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
                                please click and fill out the form, and we wil get back to you ASAP.</p>
                            </div>


                            <div className="col-md-5 contact-form">
                                <form onSubmit={FormSubmit}>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="fullname" value={data.fullname}
                                        onChange={changeHandler}
                                        required
                                        placeholder="Full Name" />

                                    <input type="email"
                                        className="form-control"
                                        name="email"
                                        value={data.email}
                                        required
                                        onChange={changeHandler}
                                        placeholder="Email address" />

                                    <input type="number"
                                        className="form-control"
                                        name="phone"
                                        value={data.phone}
                                        required
                                        onChange={changeHandler}
                                        placeholder="Phone number" />

                                    <textarea rows="4"
                                        className="form-control"
                                        cols="40"
                                        name="msg"
                                        value={data.msg}
                                        required
                                        onChange={changeHandler}
                                        placeholder="Message"></textarea>

                                    <div className="send-btn text-center">
                                        <button type="submit">SEND</button>
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
