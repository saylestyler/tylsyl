import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';

// #TODO: wip
(function() {
  const includeBorderColors = false;
  const allColors = {};
  const props = ["background-color", "color"]
  const ignoreColors = {
    "rgb(0, 0, 0)": 1,
    "rgba(0, 0, 0)": 1,
    "rgb(255, 255, 255)": 1
  };

  // #TODO: update way
  [].forEach.call(document.querySelectorAll("*"), node => {
    const nodeColors = {};

    props.forEach(prop => {
      const color = window.getComputedStyle(node, null).getPropertyValue(prop);
      const borderProperty = (prop.indexOf("border") != -1);
      const nonZeroBorder = borderProperty
        ? window
            .getComputedStyle(node, null)
            .getPropertyValue(prop.replace("color", "width")) !== "0px"
        : true;
      const successColorConditions;
    })
  })
})();

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
