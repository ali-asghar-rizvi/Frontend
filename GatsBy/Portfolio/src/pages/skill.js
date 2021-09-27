// import React from 'react'
// import Layout from '../components/common/layout'
// import { graphql } from "gatsby"



// const Skills = ({ data: {skill} }) => {
//     return (
//         <Layout>
        
//             <section className="blogs">
//                 <div className="container">
//                 <div className="row">
//                     {skill.nodes.map((skill_content) => {
//                     return (
//                         <div className="col-md-3" key={skill_content.id}>
//                         <div className="blog-content" >
               
//                         <img src={skill_content.img.fluid.src} alt={skill_content} className="img-fluid" />

//                         <h2>{skill_content.title}</h2>
//                         </div>
//                         </div>
//                     )
//                     })
//                     }
//                 </div>
//                 </div>
//             </section>
  
//         </Layout>
//     )
// }






// export const query = graphql`
//   {
//    skill:  allContentfulSkill {
//       nodes {
//         title
//         img {
//           fluid {
//             src
//           }
//         }
//         id
//       }
//     }
//   }
// `


// export default Skills