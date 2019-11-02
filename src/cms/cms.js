import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);

// experiment
const onElementReady = el => new Promise((resolve) => {
  const waitForElement = () => {
    if (el) resolve(el);
    else {
      window.requestAnimationFrame(waitForElement);
    }
  };
  waitForElement();
})
var nav = document.querySelector(`#nc-root > div > div.nc-appHeader-container`)
onElementReady(nav).then(() => nav.innerText = '')

window.onload = () => {
  /* hide stuff */
  // tar borta poänglösa navbar
  // contents sidebar
  document.querySelector('#nc-root > div > div.nc-app-main > div > div > div.nc-collectionPage-sidebar').style.width = '0px'
  // view as grid
  document.querySelector('#nc-root > div > div.nc-app-main > div > div > div.nc-collectionPage-main > div.nc-collectionPage-top > div.nc-collectionPage-top-viewControls.nc-collectionPage-top-viewControls-noDescription').innerHTML = '';
  // sub-subtitle
  document.querySelector('#nc - root > div > div.nc - app - main > div > div > div.nc - collectionPage - main > div.nc - collectionPage - top > div.nc - collectionPage - top - row > h1').innerHTML = '';

  /* mod */
  // nice n shiny new button
  document.querySelector(`#nc-root > div > div.nc-app-main > div > div > div.nc-collectionPage-main > div.nc-collectionPage-top > div.nc-collectionPage-top-row > a`).innerText = 'NEW'
  document.querySelector(`#nc-root > div > div.nc-app-main > div > div > div.nc-collectionPage-main > div.nc-collectionPage-top > div.nc-collectionPage-top-row > a`).style.backgroundColor = 'blue'
  document.querySelector('.nc-collectionPage-topNewButton').style.padding = '0 180px';
};

