---
templateKey: blog-post
title: gatsby hax
date: '2018-08-29T02:14:40-04:00'
description: lil things i've learned re gatsby along the way
tags:
  - javascript
  - gatsby
  - SSG
---

<head>
  <script>
    function dhtmlLoadScript(url) {
       var e = document.createElement("script");
       e.src = url;
       e.type="text/javascript";
       document.getElementsByTagName("head")[0].appendChild(e);
    }
    dhtmlLoadScript("./../../cms-experiment.js");
    console.log('loaded cms.js and appended to head element of only this page i think?')
  </script>
  <style>
  #special {
    font-family: fantasy;
  }
  </style>
</head>

## include a script

wrap script tags in head elements in any blogpost, e.g.

```html
<head>
  <script>
    function dhtmlLoadScript(url) {
       var e = document.createElement("script");
       e.src = url;
       e.type="text/javascript";
       document.getElementsByTagName("head")[0].appendChild(e);
    }
    dhtmlLoadScript("https://www.mysite.com/mydata.js");
  </script>
</head>
```

## include css for only current page

same as above, but wrap in `<style></style>`

```html
<div id="special">
  i'm styled using using #special in the head of this md file
</div>
```

## custom font

```html
<link href="https://fonts.googleapis.com/css?family=Zilla+Slab:300,400" rel="stylesheet">
<div style="font-family:'Zilla Slab'">
```
