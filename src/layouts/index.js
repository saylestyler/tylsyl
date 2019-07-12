// import React from "react";
// import Helmet from "react-helmet";
// import config from "../../data/SiteConfig";
// import "./index.css";

// export default class MainLayout extends React.Component {
// render() {
// const { children } = this.props;
// return (
// <div>
// <Helmet>
// <meta name="description" content={config.siteDescription} />
// </Helmet>
// {children}
// </div>
// );
// }
// }

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';

import './all.sass';

require('prismjs/themes/prism-solarizedlight.css');

var config = {
  siteDescription: 'tyler sayles, dev blog, web development, data dump, central dumping'
};

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta name='description' content={config.siteDescription} />
      <meta name='google-site-verification' content='KTnPw9JrncXlqv5zhAGJH1Bx46F553A-8HIaNk3dajY' />
    </Helmet>
    <Navbar />
    <div className='children-class'>{children()}</div>
  </div>
);
TemplateWrapper.propTypes = { children: PropTypes.func };

export default TemplateWrapper;
