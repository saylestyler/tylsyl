import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';

import './all.css';

require('prismjs/themes/prism-funky.css');

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content="tyler sayles, central dev blog data dump" />
      <meta name="google-site-verification" content="KTnPw9JrncXlqv5zhAGJH1Bx46F553A-8HIaNk3dajY" />
      <link rel="canonical" href="https://tylsyl.com" />
    </Helmet>
    <div className="application-wrapper">
      <Navbar />
      <div className="children-class">{children()}</div>
    </div>
  </div>
);

export default TemplateWrapper;
