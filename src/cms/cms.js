import CMS from 'netlify-cms';
import cloudinary from 'cloudinary-core';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';

window.ml = cloudinary.openMediaLibrary({
  cloud_name: 'cloudimgts',
  upload_preset: 'aqga34kp',
  api_key: '739913194731388',
  button_class: 'myBtn',
  default_transformations: [{ quality: 'auto' }, { format: 'auto' }],
  insert_transformation: true
}, {
  insertHandler: function (data) {
    data.assets.forEach(asset => {
      console.log('Inserted asset:',
        JSON.stringify(asset, null, 2));
    });
  }
}, document.getElementById('open-btn'));

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);

window.onload = addElement;

addElement();

function addElement () {
  // make widget with launch button
  var widg = document.createElement('div');
  widg.innerHTML = `<div>
                      <button id="cl-button"
                              class="myBtn"
                              onclick="launchCML()">
                        UPPLADDA
                      </button>
                    </div>`;
  widg.style.position = 'fixed';
  widg.style.background = 'green';
  widg.style.top = '60px';
  document.body.appendChild(widg);

  var goToSite = document.createElement('div');
  goToSite.innerHTML = `<div>
                         <a href='tylsyl.com' />
                           <button>
                              Gå TillSi
                            </button>
                          </a>
                        </div>`;
  goToSite.style.position = 'fixed';
  goToSite.style.width = '80px';
  goToSite.style.height = '50px';
  goToSite.style.top = '250px';
  document.body.appendChild(goToSite);

  // replace new blog button w/ nya
  var newBlogButton = document.getElementsByClassName('nc-collectionPage-topNewButton');
  newBlogButton[0].innerHTML = '<h1>NYA</h1>';

  document.body.getElementsByClassName('nc-appHeader-content')[0].style.visibility = 'hidden';
}

// function launchCML () {
//   cloudinary.applyUploadWidget('#upload_widget_opener', {
//     cloud_name: 'cloudimgts',
//     upload_preset: 'aqga34kp',
//     api_key: '739913194731388',
//     button_class: 'myBtn'
//   },
//   (error, result) => {
//     if (error) {
//       console.log(error)
//     } else {
//       console.log(result)
//     }
//   })
// }

/*!
 * Run event after the DOM is ready
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} fn Callback function
 */
var ready = function (fn) {
  // Sanity check
  if (typeof fn !== 'function') return;

  // If document is already loaded, run method
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    return fn();
  }

  // Otherwise, wait until document is loaded
  document.addEventListener('DOMContentLoaded', fn, false);
};

ready(function () {
  // hide shit
  document.body.getElementsByClassName('nc-collectionPage-topHeading')[0].style.visibility = 'hidden';
  document.body.getElementsByClassName('nc-collectionPage-sidebarHeading')[0].style.visibility = 'hidden';

  // highlight search as a reminder that u can search all posts
  document.body.getElementsByClassName('nc-collectionPage-sidebarSearch')[0].style.width = '300px';
});
