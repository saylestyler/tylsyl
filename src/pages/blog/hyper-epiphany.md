---
templateKey: blog-post
title: Hyper Epiphany
date: '2018-07-24T12:21:05-04:00'
description: 'hyperjs = electron = devtools = jsre '
tags:
  - hyperjs
---

minor epiphany re: electron app's true nature

didn't want to lose my randomly updating settings on hyper once i
found a scheme i was pleased w/ suddenly and what do i rememebr but
the fact that _its built on electron_ c'est-a-dire javascript

From hyper.is

>  Extensions are universal Node.js modules loaded by both Electron and the renderer process.
>  The extension system is designed around composition of the APIs we use to build the terminal: React components and Redux actions.

`cmd + opt + i`

opens the entire application yeo!

(get into this complexity gig—and keep going to the root causes)

```
cursorColor: '#F81CE5',
  cursorAccentColor: '#000',
  cursorShape: 'BLOCK',
  cursorBlink: !1,
  borderColor: '#333',
  selectionColor: 'rgba(248,28,229,0.3)',
  fontSize: 12,
  padding: '12px 14px',
  fontFamily: 'Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',
  uiFontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  fontSizeOverride: null,
  fontSmoothingOverride: 'antialiased',
  fontWeight: 'normal',
  fontWeightBold: 'bold',
  css: '',
  termCSS: '',
  openAt: {},
  resizeAt: 0,
  colors: {
    black: '#000000',
      red: '#C51E14',
      green: '#1DC121',
      yellow: '#C7C329',
      blue: '#0A2FC4',
      magenta: '#C839C5',
      cyan: '#20C5C6',
      white: '#C7C7C7',
      lightBlack: '#686868',
      lightRed: '#FD6F6B',
      lightGreen: '#67F86F',
      lightYellow: '#FFFA72',
      lightBlue: '#6A76FB',
      lightMagenta: '#FD7CFC',
      lightCyan: '#68FDFE',
      lightWhite: '#FFFFFF'
  },
  activityMarkers: {},
  notifications: {
    font: !1,
      resize: !1,
      updates: !1,
      message: !1
  },
  foregroundColor: '#fff',
  backgroundColor: '#000',
}
```

A lil more elucidation

_data exposure_

<blockquote>
Instead of exposing a custom API method or parameter for every possible customization point, we allow you to intercept and compose every bit of functionality!

The only knowledge that is therefore required to successfully extend Hyper is that of its underlying open source libraries.

You can find additional details about plugin development here

Your module has to expose at least one of these methods:
</blockquote>
