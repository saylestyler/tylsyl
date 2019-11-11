import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';

import './all.css';

require('prismjs/themes/prism-funky.css');

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta name="description" content="tyler sayles, central dev blog data dump" />
      <meta name="google-site-verification" content="KTnPw9JrncXlqv5zhAGJH1Bx46F553A-8HIaNk3dajY" />
    </Helmet>
    <div className="application-wrapper">
      <Navbar />
      <div className="children-class">{children()}</div>
    </div>
  </div>
);

export default TemplateWrapper;
