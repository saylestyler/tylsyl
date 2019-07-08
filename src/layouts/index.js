import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/header'
import './index.css'
require('prismjs/themes/prism-twilight.css')

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Tyler Sayles dev blog' },
        { name: 'keywords', content: 'devblog, blog, log, brain dump, postmortem' }
      ]}
    />
<Header siteTitle={data.site.siteMetadata.title} /> 
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1060,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}
    >
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
