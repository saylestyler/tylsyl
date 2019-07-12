module.exports = {
  siteMetadata: {
    title: 'Tyler Sayles blog',
    description: 'testing description :)',
    siteUrl: `https://www.tylsyl.com`
  },
  // pathPrefix: `/`
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              aliases: '{ s: "shell" }, { j: "javascript" }'
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-93902103-1`
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ]
}

// module.exports = {
// siteMetadata: {
// title: 'Tyler Sayles blog',
// description: 'TESTTTTTING tyl desc'
/// / ayyyyyyyyyyyyyyyyy
// },
// plugins: [
// 'gatsby-plugin-react-helmet',
// 'gatsby-plugin-sass',
// {
// resolve: 'gatsby-source-filesystem',
// options: {
// path: `${__dirname}/src/pages`,
// name: 'pages'
// }
// },
// {
// resolve: 'gatsby-source-filesystem',
// options: {
// path: `${__dirname}/static/img`,
// name: 'static'
// }
// },
// {
// resolve: 'gatsby-source-filesystem',
// options: {
// path: `${__dirname}/src/cms`,
// name: 'cms'
// }
// },
// {
// resolve: `gatsby-transformer-remark`,
// options: {
// plugins: [
// {
// resolve: `gatsby-remark-prismjs`,
// options: {
/// / Class prefix for <pre> tags containing syntax highlighting;
/// / defaults to 'language-' (eg <pre class="language-js">).
/// / If your site loads Prism into the browser at runtime,
/// / (eg for use with libraries like react-live),
/// / you may use this to prevent Prism from re-processing syntax.
/// / This is an uncommon use-case though;
/// / If you're unsure, it's best to use the default value.
// classPrefix: 'language-',
/// / This is used to allow setting a language for inline code
/// / (i.e. single backticks) by creating a separator.
/// / This separator is a string and will do no white-space
/// / stripping.
/// / A suggested value for English speakers is the non-ascii
/// / character '›'.
// inlineCodeMarker: null,
/// / This lets you set up language aliases.  For example,
/// / setting this to '{ sh: "bash" }' will let you use
/// / the language "sh" which will highlight using the
/// / bash highlighter.
// aliases: {}
// }
// }
// ]
// }
// },
// {
// resolve: `gatsby-remark-images`,
// options: {
// maxWidth: 500
// }
// },
// {
// resolve: `gatsby-remark-prismjs`,
// options: {
/// / Class prefix for <pre> tags containing syntax highlighting;
/// / defaults to 'language-' (eg <pre class="language-js">).
/// / If your site loads Prism into the browser at runtime,
/// / (eg for use with libraries like react-live),
/// / you may use this to prevent Prism from re-processing syntax.
/// / This is an uncommon use-case though;
/// / If you're unsure, it's best to use the default value.
// classPrefix: "language-",
/// / This is used to allow setting a language for inline code
/// / (i.e. single backticks) by creating a separator.
/// / This separator is a string and will do no white-space
/// / stripping.
/// / A suggested value for English speakers is the non-ascii
/// / character '›'.
// inlineCodeMarker: null,
/// / This lets you set up language aliases.  For example,
/// / setting this to '{ sh: "bash" }' will let you use
/// / the language "sh" which will highlight using the
/// / bash highlighter.
// aliases: {},
/// / This toggles the display of line numbers alongside the code.
/// / To use it, add the following line in src/layouts/index.js
/// / right after importing the prism color scheme:
/// /  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
/// / Defaults to false.
// showLineNumbers: false,
// }
// },
// {
// resolve: `gatsby-remark-responsive-iframe`,
// options: {
// wrapperStyle: `margin-bottom: 1.0725rem`
// }
// },
// 'gatsby-remark-copy-linked-files',
// 'gatsby-remark-smartypants'
// ]
// }
// },
// `gatsby-transformer-remark`,
// `gatsby-transformer-sharp`,
// `gatsby-plugin-sharp`,
// {
// resolve: `gatsby-plugin-google-analytics`,
// options: {
// }
// },
// {
// resolve: 'gatsby-plugin-netlify-cms',
// options: {
// modulePath: `${__dirname}/src/cms/cms.js`
// }
// },
// 'gatsby-plugin-netlify' // make sure to keep it last in the array
// ]
// }
