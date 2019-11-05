---
templateKey: blog-post
title: $PYTHON $PATH
date: '2018-07-24T13:23:14-04:00'
description: '$PATH nightmares '
tags:
  - python
---
![altylsyl](https://res.cloudinary.com/cloudimgts/image/upload/v1572405112/vev2rjvvjfyhglloc3oz.png)

## jk, just use pyenv

```bash
brew install pyenv
pyenv install 3.7.3
pyenv global 3.7.3

echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\nfi' >> ~/.zshrc

exec $0

which python && which pip
```

and verify the output : )

## just use virutalenv

plz just use it like so:

`virtualenv --python /usr/bin/python2.7 --system-site-packages env`

[ref](https://gist.github.com/jaraco/bed7168bce24673219ae773081fd4ab6)


## on new computer

1. from [`sourabh bajaj`](http://sourabhbajaj.com/mac-setup/Python/)

```shell
brew install python
brew install python@2
pip install --upgrade setuptools
pip install --upgrade pip
```
2. "Executable scripts from Python packages you install will be put in `/usr/local/share/python`, make sure it's on your PATH."

3. from .zshrc via oh-my-zsh:

> _Python modules have been installed and Homebrew's site-packages is not in your Python sys.path, so you will not be able to import the modules this formula installed. If you plan to develop with these modules, please run:_

```python
mkdir -p $HOME/Library/Python/2.7/lib/python/site-packages

echo 'import site; site.addsitedir("/usr/local/lib/python2.7/site-packages")' >
  $HOME/Library/Python/2.7/lib/python/site-packages/homebrew.pth
```

after that do something like this ~ (all of these work with pip3 & python3 as well, if one doesn't work try the other)

test it out w/ this cute bs4 nugget

```python
# my_parser.py
!#/usr/bin/env python

from bs4 import BeautifulSoup

messy = """
<html><p>
   <em>ay
            </em>
</p>
</html>
etc.
"""

BeautifulSoup.prettify()
```

```bash
pip install bs4
pip install beautifulsoup
python parser.py
```

explanation:

```
site.addsitedir(sitedir, known_paths=None)
```

Add a directory to sys.path and process its .pth files. Typically used in sitecustomize or usercustomize (see above).

```
sys.path
```

A list of strings that specifies the search path for modules. Initialized from the environment variable PYTHONPATH, plus an installation-dependent default.

Module `site`

*This describes how to use .pth files to extend sys.path.*
