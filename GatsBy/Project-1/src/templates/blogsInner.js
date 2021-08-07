import React from 'react'
import { Link } from "gatsby"
import Layout from './../components/common/layout';
const blogTemplates = ({ pageContext: { data } }) => {
    console.log('props', data)
    return (
        <Layout>
            <section className="Blog-Inner-Pages" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <h2>{data.title}</h2>
                            <img src={data.image.fluid.src} alt={data.title} />
                            <p>{data.info.info}</p>
                            <p>{data.info.info}</p>
                            <p>{data.info.info}</p>
                            <div className="back-to-home">
                             <Link to="/blog">Back To Blog</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default blogTemplates
