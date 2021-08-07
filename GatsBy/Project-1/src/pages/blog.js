// import React from 'react'
// import { FiVideo } from "react-icons/fi";
// import Layout from '../components/common/layout'

// const blog = () => {
//     return (
//         <Layout>
//             <section class="blogs">
//                 <div class="container">
//                     <div class="col-md-12">
//                         <h1>Blogs</h1>
//                     </div>
//                     <div class="row">
//                         <div class="col-md-4">
//                             <div className="blog-content">
//                                 <i><FiVideo /></i>
//                                 <h5>Lorem ipsum dolor</h5>
//                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
//                                     luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
//                             </div>
//                         </div>

//                         <div class="col-md-4">
//                             <div className="blog-content">
//                                 <i><FiVideo /></i>
//                                 <h5>Lorem ipsum dolor</h5>
//                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
//                                     luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
//                             </div>
//                         </div>

//                         <div class="col-md-4">
//                             <div className="blog-content">
//                                 <i><FiVideo /></i>
//                                 <h5>Lorem ipsum dolor</h5>
//                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
//                                     luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
//                             </div>
//                         </div>

//                         <div class="col-md-4">
//                             <div className="blog-content">
//                                 <i><FiVideo /></i>
//                                 <h5>Lorem ipsum dolor</h5>
//                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
//                                     luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
//                             </div>
//                         </div>


//                         <div class="col-md-4">
//                             <div className="blog-content">
//                                 <i><FiVideo /></i>
//                                 <h5>Lorem ipsum dolor</h5>
//                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
//                                     luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
//                             </div>
//                         </div>


//                         <div class="col-md-4">
//                             <div className="blog-content">
//                                 <i><FiVideo /></i>
//                                 <h5>Lorem ipsum dolor</h5>
//                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
//                                     luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
//                             </div>
//                         </div>


//                         <div class="col-md-4">
//                             <div className="blog-content">
//                                 <i><FiVideo /></i>
//                                 <h5>Lorem ipsum dolor</h5>
//                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
//                                     luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
//                             </div>
//                         </div>

//                         <div class="col-md-4">
//                             <div className="blog-content">
//                                 <i><FiVideo /></i>
//                                 <h5>Lorem ipsum dolor</h5>
//                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
//                                     luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
//                             </div>
//                         </div>


//                         <div class="col-md-4">
//                             <div className="blog-content">
//                                 <i><FiVideo /></i>
//                                 <h5>Lorem ipsum dolor</h5>
//                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
//                                     luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
//                             </div>
//                         </div>


//                     </div>
//                 </div>
//             </section>
//         </Layout>
//     )
// }

// export default blog






















// import React from "react"
// import { graphql } from "gatsby"
// import Layout from '../components/common/layout'


// const Blogs = ({ data: { blogs } }) => {
//     return (
//         <Layout>
//             <section className="blogs">
//                 {
//                     blogs.nodes.map((blogs) => {
//                         console.log('blogs', blogs)
//                         return (
//                             <article>
//                                 <h5>{blogs.title}</h5>
//                                 {/* <p>{blogs.info}</p> */}
//                             </article>
//                         )
//                     }
//                     )
//                 }



//             </section>
//         </Layout>
//     )
// }

// export const query = graphql`
//   {
//     blogs: allContentfulBlogs {
//       nodes {
//         title
//         id
//         info {
//           info
//         }
//       }
//     }
//   }
// `

// export default Blogs









































































// import React from 'react'
// import Layout from '../components/common/layout'

// const blog = () => {
//     return (
//         <Layout>
//             <section class="blogs">
//                 <div class="container">
//                     <div class="row">   

//                         <div class="col-md-12">
//                             <h1>Blogs</h1>
//                         </div>

//                         <div class="col-md-4">
//                             <div className="blog-content">
//                                 <h5>Lorem ipsum dolor</h5>
//                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
//                                    uctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>b
//         </Layout>
//     )
// }

// export default blog







































// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/common/layout"

// const ComponentName = ({ data :blogs}) => {
//   return(
//     <Layout>
//       <section>
//         {
//           blogs.nodes.map((blog) => {
//             console.log(blog)
//             return (
//               <article key={blog.id}>
//                 <h2>{blog.title}</h2>
//                 <img src={blog.image.fluid.src} alt={blog.title} width={200} height={200}/>
//                 {/* <h6>{{blog.info.info}}</h6> */}
//               </article>
//             )
//           })
//         }
//       </section>
//     </Layout>
//     )

// }

// export const query = graphql`
//   {
//    blogs: allContentfulBlogs {
//       nodes {
//         title
//         info {
//           info
//         }
//         image {
//           fluid {
//             src
//           }
//         }
//         id
//       }
//       totalCount
//     }
//   }
// `

// export default ComponentName














// import React from "react"
// import { graphql } from "gatsby"

// const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

// export const query = graphql`
//   {
//     allContentfulBlogs {
//       nodes {
//         id
//         slug
//         title
//         info {
//           info
//         }
//         image {
//           fluid {
//             src
//           }
//         }
//       }
//     }
//   }
// `

// export default ComponentName

















import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/common/layout'
const Blogs = ({ data: { blogs } }) => {
  return (
    <Layout>
      <section className="blogs">
        <div className="container">
          <div className="row">
            {blogs.nodes.map((blog) => {
              return (
                <div className="col-md-4" key={blog.id}>
                  <div className="blog-content" >
                  <h2>{blog.title}</h2>
                    <img src={blog.image.fluid.src} alt={blog.title} className="img-fluid" />

                    <Link className="read-more-btn" to={`/blog/${blog.slug}`}>Read Me </Link>
                  </div>
                </div>
              )
            })
            }
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
   blogs: allContentfulBlogs {
      nodes {
        title
        info {
          info
        }
        image {
          fluid {
            src
          }
        }
        slug
        id
      }
      totalCount
    }
  }
`

export default Blogs


