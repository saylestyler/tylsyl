---
templateKey: blog-post
title: (fuck) css dump
date: '2018-07-24T12:40:07-04:00'
description: see title
tags:
  - css
---

## eCSSential demo

<https://filamentgroup.github.io/eCSSential/examples/default/>

<div class="green">
  tldr: console.log + devtools + documentation + no "guessing"
</div>

## use dev tools :~)

plz

## span[class*="token"]

... is different than

```css
span[class*="token-"]
```

when attempting to modify:

```css
<span class="token keyword">void</span>
```

## do `l <space> "how do u center a div in a doc" <CR>

b4 anything else

## centering shit

## text-align: center ~> display: inline-block

center a div by applying  `text-align: centner` to a parent and its child to `inline-block`

## that didn't work?

use devtools and start clicking boxes off

## perhaps ur overlooking -webkit-leading-margin: 2em on all divs?

be wary of vendor prefixes!!!

## be a tool

use stylelint, pureifycss, htmlhint, prettier, or w3c's validators
