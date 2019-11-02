import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';

import './all.sass';

require('prismjs/themes/prism-solarizedlight.css');

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta name='description' content='tyler sayles, central dev blog data dump' />
      <meta name='google-site-verification' content='KTnPw9JrncXlqv5zhAGJH1Bx46F553A-8HIaNk3dajY' />
    </Helmet>
    <div className='application-wrapper'>
      <Navbar />
      {/* children() = blog posts / list */}
      <div className='children-class'>{children()}</div>
    </div>
  </div>
);

export default TemplateWrapper;
