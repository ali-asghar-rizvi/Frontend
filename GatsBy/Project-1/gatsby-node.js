const path = require('path');
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
    {
        blogs: allContentfulBlogs {
        nodes {
          slug
          shortInfo
          info{
              info
          }
          title
          image{
              fluid{
                  src
              }
          }
        }
      }
    }
`)
    result.data.blogs.nodes.forEach((data) => {
        createPage({
            path: `/blog/${data.slug}`,
            component: path.resolve('./src/templates/blogsInner.js'),
            context: {
                data: data
            }
        })
    })

}
