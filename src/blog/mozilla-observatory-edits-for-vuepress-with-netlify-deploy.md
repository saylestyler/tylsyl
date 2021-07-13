---
title: Mozilla Observatory Edits for Vuepress with Netlify Deploy
date: 2021-07-12T23:25:17.891Z
excerpt: site security edits with vuepress and netlify
tags:
  - security
blog: true
---
I ran [mozilla observatory]() for this site. Here was my report, and how I fixed it, with notes... note: easy to break things by fiddling with these things, but what better way to learn : ).

![mozilla observatory results](https://res.cloudinary.com/cloudimgts/image/upload/v1626132528/Screen_Shot_2021-07-12_at_7.25.51_PM_l3dnhy.png)

I use VuePress + netlify to deploy this site. Every push to master runs `vuepress build src` and then netlify takes care of serving the static assets.

# netlify.toml

To specify header rules, u create a `netlify.toml` file at the base of your build dir. [Here](https://gist.github.com/DavidWells/43884f15aed7e4dcb3a6dad06430b756) are all available values. For vuepress this will be a sibling of package.json.

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    Content-Security-Policy = "default-src 'none'; img-src 'self'; script-src 'self'; style-src 'self'"
```

This brought my grade from a D to a B.

# X-Content-Type-Options

Don't guess the MIME types of files delivered. MIME sniffing is when u inspect the contents of a byte-stream to try and deduce its file format.

[Here's a great SO explanation](https://stackoverflow.com/a/37201425/6837445).

# X-Frame-Options

Sez whether or not your site can be framed. Prevents clickjacking. Clickjacking makes it look like someone is clicking a link on site A, when really its site B666. Saying `DENY` disallows attempts to iframe the site.

Superseded by content-security-policy's `frame-ancestors` attribute but still graded/used (guess which browser lies behind this).

# X-XSS-Protection

Blocks pages from loading when the browser detects an X-XSS attack. Will maybe come back to this and figure out how : ) Maybe.

# Content-Security-Policy

Allows fine-grained control of where resources can be loaded from.
*But*, from mozilla:

> Note that disabling inline JavaScript means that all JavaScript must be loaded from <script> src tags . Event handlers such as onclick used directly on a tag will fail to work, as will JavaScript inside <script> tags but not loaded via src. Furthermore, inline stylesheets using either <style> tags or the style attribute will also fail to load. As such, care must be taken when designing sites so that CSP becomes easier to implement.

# notes on CSP:

I got an A+!, but:

It disallowed youtube, tweets, and images from cloudinary to be embedded, stripped my css, and broke service worker. This was all tellingly detailed in the console:

![](https://res.cloudinary.com/cloudimgts/image/upload/v1626135379/Screen_Shot_2021-07-12_at_8.16.15_PM_ttiivc.png)

I actually liked the stripped down version of the CSS, the service worker was just a VuePress out of the box thing, and to fix the other issues, you just specify trusted domains like so:

```
img-src media.com # for any site '*'
```

I also had the netlify CMS script inlined:

```js
if (window.netlifyIdentity) {
   window.netlifyIdentity.on("init", user => {
     if (!user) {
       window.netlifyIdentity.on("login", () => {
         document.location.href = "/admin/";
       });
     }
   });
 }
```

This was the final CSP:

```
Content-Security-Policy = "default-src 'none'; img-src *; script-src identity.netlify.com https://unpkg.com/netlify-cms@%5E2.0.0/dist/netlify-cms.js; style-src 'self'"
```

Edit: that didn't actually work, I found [this much better article](https://jeffschoonover.dev/posts/2020/10/implementing-content-security-policy-netlify/) about all this and commented out CSP for now because I'm gonna go eat some mashed potatoes.

: )
