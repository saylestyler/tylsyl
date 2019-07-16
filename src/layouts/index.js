import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navbar from '../components/Navbar'

import './all.sass'

require('prismjs/themes/prism-solarizedlight.css')

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta name='description' content='tyler sayles, dev blog, web development, data dump, central dumping' />
      <meta name='google-site-verification' content='KTnPw9JrncXlqv5zhAGJH1Bx46F553A-8HIaNk3dajY' />
    </Helmet>
    <Navbar />
    <div className='children-class'>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = { children: PropTypes.func }

export default TemplateWrapper
