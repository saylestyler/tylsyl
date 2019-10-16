---
templateKey: blog-post
title: npm dump
date: '2018-09-14T23:40:26-04:00'
description: npm not recognized!
tags:
  - zsh
  - programming
  - fix
---

# zsh: command not found: npm

<div class="note">
  run <b>brew doctor</b> before u start messing with ~/.node and $PATH vars
</div>

1. `brew doctor`

```
> brew doctor

Warning: You have unlinked kegs in your Cellar
Leaving kegs unlinked can lead to build-trouble and cause brews that depend on
those kegs to fail to run properly once built. Run `brew link` on these:

  node_modules

> brew link node_modules

Error: Multiple kegs installed to /usr/local/Cellar/node_modules
However we don't know which one you refer to.
Please delete (with rm -rf!) all but one and then try again.

> /usr/local/Cellar/node
  10.11.0 10.10.0
> rf 10.10.0/

Warning: Homebrew's sbin was not found in your PATH but you have installed
formulae that put executables in /usr/local/sbin.
Consider setting the PATH for example like so

  echo 'export PATH="/usr/local/sbin:$PATH"' >> ~/.zshrc

arning: Broken symlinks were found. Remove them with `brew prune`:
  /usr/local/bin/node-debug
  /usr/local/bin/node-gyp
  /usr/local/bin/node-inspector
  /usr/local/bin/npm
  /usr/local/bin/npx
```

# THEN...

  a. frantically search github issues pages and try them at random

  b. go to [nodejs.org/en/download/](https://nodejs.org/en/download/)

if option b, the only clinteraction you'll have to have is maybe

`$ sudo chown -R $(whoami) /usr/local/lib`

et voilà
