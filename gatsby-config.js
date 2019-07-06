module.exports = {
  siteMetadata: {
    title: 'Home',
    url: 'https://www.tylsyl.com',
    author: 'Tyler Sayles'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-remove-trailing-slashes`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
        name: 'src'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Tyler Sayles',
        short_name: 'Tyler Sayles',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/img/download.jpeg'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`
  ]
}
