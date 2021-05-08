---
title: "NaN people are viewing this product "
date: 2021-05-08T17:28:37.653Z
excerpt: "intersting console message from nordstrom.com "
tags: browsers
---
I was served an ad for a Nike hat that I thought was pretty cute on instagram. I opened the link on my phone and saw that the page had one of those scarcity cta's "38 people viewing this". Red font. 

Whenever I see one of these I inspect the page to see if it's `Math.floor(Math.random() * 100) + 1`, _for fun_. So I opened my computer and google nordstrom nike hat, clicked the first result and the nothing loaded. I opened the console and saw this: 

![nordstrom](https://res.cloudinary.com/cloudimgts/image/upload/v1620495325/Screen_Shot_2021-05-08_at_1.34.52_PM_h3wiyp.png)

and figured I would figure out what that meant. 

## replaceState()

> The History.replaceState() method modifies the current history entry, replacing it with the stateObj, title, and URL passed in the method parameters. This method is particularly useful when you want to update the state object or URL of the current history entry in response to some user action.

Ok so this makes sense, kind of, why it would want to do so with a siteclosed subdomain is weird though. Failed to execute 'replaceState' on 'History': A history state object with URL 'https://siteclosed.nordstrom.com/invitation.html' cannot be created in a document with origin 'https://www.nordstrom.com' and URL 'https://www.nordstrom.com/sr/nike-hat'. The invitation.html route leading me to believe that something once used for a signup/offer no longer is, and thusly this problem.

## Refused to get unsafe header "ISTL-INFINITE-LOOP"

Googling this yields surprisingly few result... [this SO post](https://stackoverflow.com/questions/60320007/get-html-content-with-jsoup-filled-body-tag-by-javascript-code) has a similar body to what this webpage had though. Most of the other returns on google are related to selenium, and that the Nordstrom script might have been there to prevent scraping. It's also using `replaceState()`: 

```js
xhr.onload = function() {
 var isValid = xhr.getResponseHeader("ISTL-INFINITE-LOOP")
   
 if (isValid != null && isValid != '') return

 var a = xhr.getResponseHeader("ISTL-REDIRECT-TO")

 if (a != null && a != '') {
   location.replace(a)
 } else {
   if (
     window.history != null 
  && typeof history.replaceState === 'function'
   ) {
     var responseURL = xhr.responseURL != null 
       ? xhr.responseURL 
       : xhr.getResponseHeader("ISTL-RESPONSE-URL")

   if (responseURL != null && responseURL != '') {
     history.replaceState(null, '', responseURL)
   }
 }
 window.location.reload()
 }
}
```

I then found what [looks like the same code](https://onecompiler.com/html/3vysayxxp) of the nordstrom page on this online html editor here, minus some event uuids. 

Still not sure what ISTL means. Have to go get my second vaxx. Will come back to this = )





