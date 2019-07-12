---
templateKey: blog-post
title: this website dump
date: '2018-08-04T22:59:29-04:00'
description: 'add launch-cloudinary-media-library button to netlify-cms '
tags:
  - cloudinary
  - cms
---

for hosting things quickly, netlify is [simply the best](https://youtu.be/FqDZOekUDzE)
for images: cloudinary is [simply the best](https://youtu.be/FqDZOekUDzE)
for static site generators... gatsby, and while it's hard to pick just one but gatsby, hugo, jekyll, pelican are my fav if i had to

## resizing images

= just add [q_auto](https://cloudinary.com/documentation/image_optimization#use_q_auto_automatic_quality_and_encoding) after /upload/ in each url et voilà

<https://res.cloudinary.com/cloudimgts/image/upload/**Q_AUTO**/v1533436924/tylsyl/metabro.jpg>

the image below is `q_auto` and is 33% smaller when downloaded than the untouched url

![](https://res.cloudinary.com/cloudimgts/image/upload/q_auto/v1533436924/tylsyl/metabro.jpg)

## behold, an image served from my very own cloudinary account:

![](https://res.cloudinary.com/cloudimgts/v1533436500/tylsyl/products-full-width.jpg)

_`![](https://res.cloudinary.com/cloudimgts/v1533436500/tylsyl/products-full-width.jpg)`_

## copy to clipboard code generated in their upload widget editor

```javascript
function showUploadWidget() {u
 cloudinary.openUploadWidget({
    cloudName: "cloudimgts",
    uploadPreset: "aqga34kp",
    sources: [
        "local",
        "url",
        "image_search",
        "instagram",
        "facebook",
        "dropbox",
        "camera"
    ],
    googleApiKey: "<image_search_google_api_key>",
    showAdvancedOptions: true,
    cropping: true,
    multiple: false,
    defaultSource: "image_search",
    styles: {
        palette: {
            window: "#ffffff",
            sourceBg: "#f4f4f5",
            windowBorder: "#90a0b3",
            tabIcon: "#000000",
            inactiveTabIcon: "#555a5f",
            menuIcons: "#555a5f",
            link: "#0433ff",
            action: "#339933",
            inProgress: "#0433ff",
            complete: "#339933",
            error: "#cc0000",
            textDark: "#000000",
            textLight: "#fcfffd"
        },
        fonts: {
            default: null,
            "'Cute Font', cursive": "https://fonts.googleapis.com/css?family=Cute+Font",
            "'Gamja Flower', cursive": "https://fonts.googleapis.com/css?family=Gamja+Flower|PT+Serif"
        }
    }
},
 (err, info) => {
   if (err) {
     console.error("Upload Widget reported an error ", err);
   }
   else {
     console.log("Upload Widget event - ", info);
   }
  });
 }
```

said widget supports google image search, url, camera, ig, &c!

# add to netlify-cms

## netlify-cms.js

replace the unused "collections" sidebar w/ a button to launch the cloudinary media library widget à la:

1. register in `gatsby-config.js` the files you add:

```javascript
{
  resolve: 'gatsby-plugin-netlify-cms',
  options: {

  // don't forget this bit :~)
    modulePath: `${__dirname}/src/cms/cms.js`,

    stylesPath: `${__dirname}/src/cms/cms.css`, // default: undefined
    enableIdentityWidget: `true`,
    htmlTitle: `ADMIN`
  }
},
```
2. in src/cms/cms.js

```javascript
document.body.onload = addElement

function addElement () {
  // create script element
  var script = document.createElement('script')
  // Add script content // copy + pasting of https://media-library.cloudinary.com/global/all.js
  script.innerHTML = `!function(){"use strict";var // etc`
  // Append
  document.head.appendChild(script)

  var widgetHTML = '<h1>widgetHTML div</h1><div style="height: 500px; margin-top: 20px" class="my-ml-container"><button class="myBtn" onclick="launchCML()">launch cloudinary media-library</button></div>'

  var sidebar = document.getElementsByClassName('nc-collectionPage-sidebar')[0]
  sidebar.innerHTML = widgetHTML

  var launchCML = function() {
    window.ml = cloudinary.openMediaLibrary({  // eureka: "createMediaLibrary - Instantiates the widget, but does not open it." years of my life gone
      button_class: 'myBtn',
      button_caption: 'Insert Image or Video',
      default_transformations: [{quality: 'auto'}, {format: 'auto'}],
      insert_transformation: true
      // etc
    }, {
    document.getElementById('open-btn')
  }
}
```

3. make a button to launch the library

```javascript
// nc-root = guess what class
var d1 = document.getElementById('nc-root');

d1.insertAdjacentHTML('beforebegin', '<div id="two"><button>wooh</button><h2>two</h2></div>');
```


