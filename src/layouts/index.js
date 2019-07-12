import React from 'react'
import Helmet from 'react-helmet'
require('prismjs/themes/prism-twilight.css')
import './whatwg.css'
import './base.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Tyler Sayles dev blog' },
        { name: 'keywords', content: 'devblog, blog, log, brain dump, postmortem' }
      ]}
    />
    <div>
      {children()}
    </div>
  </div>
)

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
