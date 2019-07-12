---
templateKey: blog-post
title: browser.js
date: '2018-10-06T22:34:58-04:00'
description: opera dev edition
tags:
  - opera
  - javascript
  - browser
---

[browser extensions](#browserExtensions)
[mischacs](#mischacs)
[user scripts](#userScripts)

<h2>
  <a href="browserExtensions">
    browser extensions
  </a>
</h2>

## octomate

adds shiny download button to download files, a TOC, and favorites bar

[octomate](https://chrome.google.com/webstore/detail/octo-mate/baggcehellihkglakjnmnhpnjmkbmpkf?hl=en)

## octolinkr

anamotopia

[octolinker](https://octolinker.github.io/)

<image src="../../static/img/klim.png">

## klim reader

prettier even than Safari which is second prettiest

note to self: you can find stylesheets for extensions the same way as any other (n it might be well-commented too)

```sass
/*****************************************
  reset/misc
 *****************************************/
table 
  /*border-collapse: collapse*/
  border-spacing: 0
  /* border-collapse stuffs up in FF: fails to draw <td> borders when using dynamic hide/show */
  article, aside, details, figcaption,
  figure, footer, header, hgroup,
  menu, nav, section, video 
  display: block
  margin: 0
  padding: 0

/* make 'em flexible */
html, body 
  -webkit-text-size-adjust: none
    /* Prevent font scaling in landscape */
  font-size: 100%
  height: 100%
  color: #000
  font-family: 'PitchWeb-Regular'

/* Hide all direct descendants of body that aren't the klim wrapper.
 * This hides any elements that may be written into the DOM after we've
 * removed all the children of body.
 */
body > :not(.klim-wrapper) 
  display: none !important

/***** layout ******/
.header-container 
  width: 100%
  position: fixed
  top: 0
  background: black
  text-align: center
  z-index: 1000

.header-container span 
  vertical-align: top
  padding: 7px 0px 9px 0px

.article-container 
  margin-left: auto
  margin-right: auto
  padding: 0 5%
  text-align: left
```

[klim reader]( 

)

<h2>
  <a href="mischacs">
    browser extensions
  </a>
</h2>

## feeling lucky

<div class="green">
tl;dr guessing / poking around in the dark / deleting everything has never worked and if it has it's infinitely less preferable to the ^ method
</div>

feeling lucky is almost always right, if `howdoi` didn't quite get you there

1. edit ur search engine settings to include a shortcut to i'm feeling lucky query

2. mine being `l <space> "query"`

3. read the resulting page and weep

my own experiences in debugging (to tears) and watching other developers is the immediate googling of a well-ish worded question will produce the intended result

_bonus tip: this is failsafe provided that you've clearly defined distinct steps you need to take & make it happen_

_double bonus: reading documentation_

_triple bonus: reading and then practicomg what u read in a sandbox_

_quadruple bonus: spaced repetition of 1-3_

## _operabrowserjs=no_

today in *browsing* around the file system, i saw this interesting (kinda funny) script whereby opera "pretends its Chrome" for every site from Lufthansa to Australian sports websites to blend.io

`/Applications/Opera Developer.app/
Contents/Versions/57.0.3090.0/OperaFramework.framework/
Versions/A/Resources/browser.js`

<https://www.opera.com/docs/browserjs/>

```javascript
if (!location.href.includes('operabrowserjs=no')) {
  (function(document) {
    const {href, pathname, hostname} = location;

    /*
      We make references to the following functions to not get version that
      users have overwritten.
    */
    const setTimeout = window.setTimeout;
    const call = Function.prototype.call;
    const copyMethod = (method, ...defaultArgs) => {
      method.call = call;
      return (...args) => {
        if (defaultArgs.length) {
          args = defaultArgs.concat(args);
        }
        return method.call(...args);
      };
    };

    const addEventListener = copyMethod(Window.prototype.addEventListener);
    const appendChild = copyMethod(Node.prototype.appendChild);
    const createElement = copyMethod(Document.prototype.createElement);
    const createTextNode =
        copyMethod(Document.prototype.createTextNode, document);
    const setAttribute = copyMethod(Element.prototype.setAttribute);
    const querySelector = copyMethod(Document.prototype.querySelector);
    const querySelectorElement = copyMethod(Element.prototype.querySelector);

    const version = () => {
      const total = Object.keys(PATCHES).length;
      /* eslint-disable max-len */
      return `Opera OPRDesktop 28.0 core 1750.0, August 30, 2018. Active patches: ${total}`;
      /* eslint-enable max-len */
    };

    const log = text => {
      /* eslint-disable max-len, no-console */
      console.log(
          `Opera has modified script or content on ${hostname} (${text}). See browser.js for details`);
      /* eslint-enable max-len, no-console */
    };

    const isPartOfDomain = host =>
        hostname.endsWith(`.${host}`) || hostname === host;
    const hideOperaUserAgent = () => {
      const newUA = navigator.userAgent.replace(/ ?OPR.[0-9.]*/, '');
      Object.defineProperty(window.navigator, 'userAgent', {get: () => newUA});
    };

    const addCssToDocument = (cssText, doc = document, mediaType = '') => {
      addCssToDocument.styleObj = addCssToDocument.styleObj || {};
      let styles = addCssToDocument.styleObj[mediaType];
      if (!styles) {
        const head = querySelector(doc, 'head');
        if (!head) {
          // head always present in html5-parsers, assume document not ready
          addEventListener(doc, 'DOMContentLoaded', () => {
            addCssToDocument(cssText, doc, mediaType);
          }, false);
          return;
        }
        styles = createElement(doc, 'style');
        addCssToDocument.styleObj[mediaType] = styles;
        setAttribute(styles, 'type', 'text/css');
        if (mediaType) {
          setAttribute(styles, 'media', mediaType);
        }
        appendChild(styles, createTextNode(' '));
        appendChild(head, styles);
      }
      styles.firstChild.nodeValue += `${cssText}\n`;
      return true;
    };

    const PATCHES = {
      'PATCH-1173': {
        description: 'ssc[online][2].{nic,gov}.in - ' +
            'Netscape not supported message - workaround browser sniffing',
        isMatching: () => {
          if ((hostname.endsWith('.nic.in') || hostname.endsWith('.gov.in')) &&
              hostname.includes('ssc')) {
            if (hostname.match(/ssc(?:online)?2?\.(?:nic|gov)\.in/)) {
              return true;
            }
          }
          return false;
        },
        applyOnDOMReady: true,
        apply: () => {
          Object.defineProperty(
              window.navigator, 'appName', {get: () => 'Opera'});
        },
      },
      'PATCH-1218': {
        description: 'pretend to be Chrome on lufthansa.com',
        isMatching: () => isPartOfDomain('lufthansa.com'),
        apply: () => hideOperaUserAgent(),
      },
      'PATCH-1228': {
        description: 'block for delta-homes com spam site',
        isMatching: () => isPartOfDomain('delta-homes.com'),
        apply: () => location.reload('https://google.com'),
      },
      'PATCH-1227': {
        description: 'Mock as Chrome on popular American Bank Sites',
        isMatching: () => isPartOfDomain('bankofamerica.com') ||
            isPartOfDomain('chase.com'),
        apply: () => hideOperaUserAgent(),
      },
      'PATCH-1289': {
        description: 'Mock as Chrome on popular polish bank BGZ Optima',
        isMatching: () => isPartOfDomain('bgzoptima.pl'),
        apply: () => hideOperaUserAgent(),
      },
      'DNA-70096': {
        description: 'Mock Microsoft Team as Chrome',
        isMatching: () => isPartOfDomain('teams.microsoft.com'),
        apply: () => hideOperaUserAgent(),
      },
      'PATCH-1270': {
        description: 'Pretend to be Chrome on Telnor',
        isMatching: () => isPartOfDomain('telenor.no'),
        apply: () => hideOperaUserAgent(),
      },
      'PATCH-1298': {
        description: 'Pretend to be Chrome on hoopladigital',
        isMatching: () => isPartOfDomain('hoopladigital.com'),
        apply: () => hideOperaUserAgent(),
      },
      'DNAWIZ-34975': {
        description: 'Pretend to be Chrome on barnesandnoble',
        isMatching: () => isPartOfDomain('barnesandnoble.com'),
        apply: () => hideOperaUserAgent(),
      },
      'DNAWIZ-39189': {
        description: 'Pretend to be Chrome on cineplex',
        isMatching: () => isPartOfDomain('cineplex.com'),
        apply: () => hideOperaUserAgent(),
      },
      'PATCH-1303': {
        description: 'Pretend to be Chrome on penfed',
        isMatching: () => isPartOfDomain('penfed.org'),
        apply: () => hideOperaUserAgent(),
      },
      'PATCH-1296': {
        description: 'Pretend to be Chrome on instamed',
        isMatching: () => isPartOfDomain('pay.instamed.com'),
        apply: () => hideOperaUserAgent(),
      },

      // etc 

      'PATCH-1295': {
        description: 'Pretend to be Chrome on blend',
        isMatching: () => isPartOfDomain('blend.io'),
        apply: () => hideOperaUserAgent(),
      },

      'PATCH-1207': {
        description: 'Bluejeans web app doesn\'t work with Opera',
        isMatching: () => {
          if (!isPartOfDomain('bluejeans.com')) {
            return false;
          }

          if (!window.chrome.runtime || !window.chrome.runtime.sendMessage) {
            return true;
          }

          return false;
        },
        apply: () => window.chrome.runtime = {'sendMessage': () => {}},
      },
      'PATCH-555': {
        description: 'Analytix: add missing end quote',
        isMatching: () => pathname.startsWith('/AnalyticalReporting/'),
        apply: () => {
          if (pathname.includes('AnalyticalReporting/WebiModify.do') ||
              pathname.includes('AnalyticalReporting/WebiCreate.do')) {
            Object.defineProperty(window, 'embed_size_attr', {
              get: function() { return this.__embed_size_attr__; },
              set: function(arg) {
                if (arg.split('"').length === 2) {
                  arg += '"';
                }
                this.__embed_size_attr__ = arg;
              },
            });
          }
        },
      },
      'PATCH-1217': {
        description: 'pretend to be Chrome on Google Spreadsheets',
        isMatching: () => hostname.startsWith('docs.google.') &&
            pathname.startsWith('/spreadsheets/'),
        apply: () => hideOperaUserAgent(),
      },
      'DNA-69435': {
        description: 'Hide Yandex ad from yandex search results',
        isMatching: () => hostname.startsWith('yandex') &&
            pathname.startsWith('/search/'),
        apply: () => {
          addCssToDocument('.popup2.distr-popup {visibility: hidden;}');
        },
      },
    };

    for (let key in PATCHES) {
      const {isMatching, apply, description, applyOnDOMReady} = PATCHES[key];
      if (isMatching()) {
        const run = () => {
          apply();
          log(`${key}, ${description}`);
        };

        if (applyOnDOMReady) {
          addEventListener(document, 'DOMContentLoaded', run, false);
        } else {
          run();
        }
      }
    }
  })(document);
}
```


<h2>
  <a href="userScripts">
    user scripts
  </a>
</h2>


### linters

#### site check

simplest example yet mb the most informative of any bookmarklet (second maybe to Axe for accessibility)

```javascript
javascript: 
  window.location=`
    https://uitest.com/en/check/results/?url=${window.location}
  `
```

#### html code sniffer

<img src="https://res.cloudinary.com/cloudimgts/image/upload/q_auto/v1539405775/Screen_Shot_2018-10-13_at_12.42.13_AM.png">

tests 4 different standards (WCAG2[A]AA, standard 508), with links on
how to pass on the relevant whatwg guideline

```javascript
javascript: (function () {
  var _p = '//squizlabs.github.io/HTML_CodeSniffer/build/';
  var _i = function (s, cb) {
    var sc = document.createElement('script');
    sc.onload = function () {
      sc.onload = null;
      sc.onreadystatechange = null;
      cb.call(this);
    };

    sc.onreadystatechange = function () {
      if (/^(complete|loaded)$/.test(this.readyState) === true) {
        sc.onreadystatechange = null;
        sc.onload();
      }
    };

    sc.src = s;
    if (document.head) {
      document.head.appendChild(sc);
    } else {
      document.getElementsByTagName('head')[0].appendChild(sc);
    }
  };

  var options = {
    path: _p
  };

  _i(_p + 'HTMLCS.js', function () {
    HTMLCSAuditor.run('WCAG2AA', null, options);
  });

})();
```

## textise:

a proto-reader bookmarklet

```javascript
javascript: (function () {
  var here;
  here = location.href;

  if (unescape(here) == 'http://www.textise.net/showText.aspx') {
    return;
  }

  if (unescape(here).indexOf('textise.net/showText.aspx?strURL=') > -1) {
    orig = unescape(unescape(here.substr(45)));
    if (orig.substr(0, 4) != 'http') {
      orig = 'http://' + orig
    }
    location.href = orig;
  } else {
    location.href = 'http://www.textise.net/showText.aspx?strURL=' + escape(here);
  }
})()

// unescaped:

javascript:(function()%7Bvar%20here%3Bhere%3Dlocation.href%3Bif(unescape(here)%3D%3D%27http://www.textise.net/showText.aspx%27)%7Breturn%3B%7Dif(unescape(here).indexOf(%27textise.net/showText.aspx%3FstrURL%3D%27)%3E-1)%7Borig%3Dunescape(unescape(here.substr(45)))%3Bif(orig.substr(0,4)!%3D%27http%27)%7Borig%3D%27http://%27%2Borig%7Dlocation.href%3Dorig%3B%7Delse%7Blocation.href%3D%27http://www.textise.net/showText.aspx%3FstrURL%3D%27%2Bescape(here)%3B%7D%7D)()
```
