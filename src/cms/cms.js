import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);

// if (document.readyState === 'interactive' || document.readyState === 'complete') {

document.addEventListener('DOMContentLoaded', () => {
  document.body.getElementsByClassName('nc-collectionPage-topHeading')[0].style.visibility = 'hidden';
  document.body.getElementsByClassName('nc-collectionPage-sidebarHeading')[0].style.visibility = 'hidden';
  document.body.getElementsByClassName('nc-collectionPage-sidebarSearch')[0].style.width = '300px';

  var widg = document.createElement('div');
  widg.innerHTML = `
    <div> 
      <button id="cl-button" class="myBtn">
        <a href="https://www.tylsyl.com/upload">
          get media 
        </a>
      </button>
    </div>`;
  widg.style.position = 'fixed';
  widg.style.background = 'green';
  widg.style.top = '60px';
  document.body.appendChild(widg);

  var goToSite = document.createElement('div');
  goToSite.innerHTML = `<div>
                         <a href='https://www.tylsyl.com' />
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
},
false);
