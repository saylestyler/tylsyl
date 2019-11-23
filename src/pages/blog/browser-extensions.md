---
templateKey: blog-post
title: browser extensions
date: '2018-10-24T20:44:34-04:00'
description: my fav extensions & bookmarklets & snippets
tags:
  - browser-extensions
  - bookmarklets
  - browsers
---
I love a good extension / [bookmarklet](https://gist.github.com/caseywatts/c0cec1f89ccdb8b469b1):

![altylsyl](https://res.cloudinary.com/cloudimgts/image/upload/v1574474775/aczhbyw1gqgicjcqsolk.png)

Here are some that I've actually used (read: install and forget about). 

# web developer

Has literally a thousand lil' useful features that are usually included but buried in a browsers dev tools. 

![altylsyl](https://res.cloudinary.com/cloudimgts/image/upload/v1574485721/fa7w4gelrb3ufxpricnw.png)

# puppeteer recorder 

records actions on a page that are puppeteerable 

![altylsyl](https://res.cloudinary.com/cloudimgts/image/upload/v1574474818/cjl6hwntk6g7nbsswxdu.png)

# realtime i ching 

![altylsyl](https://res.cloudinary.com/cloudimgts/image/upload/v1574474592/wuw93srglq8fre341o69.png)

# print stats 

A bookmarklet that prints... out performance / loading stats + cute Polymer support as well

```javascript
javascript: (() => {
  (function printStats() {
    var loadTimes = window.chrome.loadTimes();
    firstPaint = loadTimes.firstPaintTime * 1000;
    firstPaintTime = firstPaint - (loadTimes.startLoadTime * 1000);

    console.info(`First paint took ${firstPaintTime}ms`);
    console.info(`${performance.timing.loadEventStart -     performance.timing.navigationStart}ms`);

    var instances = 0;
    if (parseFloat(Polymer.version) < 1) {
      instances = []
        .slice
        .call(document.querySelectorAll('html /deep/ *'))
        .filter(el => 
             el.localName.indexOf('-') != -1 
          || el.getAttribute('is')
        ).length;
    } else {
      instances = Polymer.telemetry.instanceCount;
    }
    console.info('Custom element instances:', instances);

    var reflectCount = 0;
    if (Polymer.telemetry) {
      console.info('=== Properties set to reflectToAttribute ===');

      Polymer.telemetry.registrations.forEach(function (el) {
        for (var prop in el.properties) {
          if (el.properties[prop].reflectToAttribute) {
            console.log(el.is + '.' + prop);
            reflectCount++;
          }
        }
      });
    } else {
      console.info('=== Properties set to reflect ===');

      Polymer.elements.forEach(function (el) {
        for (var prop in el.prototype.publish) {
          var propVal = el.prototype.publish[prop];

          if (propVal && propVal.reflect) {
            console.log(el.name + '.' + prop);
            reflectCount++;
          }
        }
      });
    }

    console.info(`
      Total properties set to reflectToAttribute: ${reflectCount}
    `);

    var imports = document.querySelectorAll('link[rel="import"]');
    var table = [];
    var totalDuration = 0;

    console.info(`
      HTML Imports load times
    `);
    [].forEach.call(imports, function (link) {
      var entries = performance.getEntriesByName(link.href);
      entries.forEach(function (e) {
        table.push({
          url: e.name,
          ms: e.duration
        });
        totalDuration += e.duration;
      });
    });

    console.log(`
       ${imports.length} imports loaded from the main page. 
       Total time: ${totalDuration} ms
    `);

    console.table(table);
  })();
})();
```

# site palette

generates a gorgina page with copy-primed hex codes

![altylsyl](https://res.cloudinary.com/cloudimgts/image/upload/v1574473469/xtwmvuy0plbpfvvzp6g1.png)

# LastPass

y'all'reddi know

# wappalyzer

Usually just use this when I see a compelling site & wanna satisfy the curiosity. 

![altylsyl](https://res.cloudinary.com/cloudimgts/image/upload/v1574486088/dwdnayiasgznybkazv8z.png)

# uBlock w/ AdBlock included

The best extension-ad-blocker I know of (_70k+ filters!_).

fun fact: the settings page is a literal trove of interesting links

![altylsyl](https://res.cloudinary.com/cloudimgts/image/upload/v1574486921/ctnqqy0limnjuu6fvlsi.png)

Any home icon links out to the source / a blog post re the source of the blockers like [Dan Pollock's hosts file](https://someonewhocares.org/hosts/):

![altylsyl](https://res.cloudinary.com/cloudimgts/image/upload/v1574487235/zqyvoxbiwismkracyjuc.png)
