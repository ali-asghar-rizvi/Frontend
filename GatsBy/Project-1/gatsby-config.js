

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_ID ,
        accessToken:  process.env.GATSBY_CONTENTFUL_API,
      },
    },
  ],
}
