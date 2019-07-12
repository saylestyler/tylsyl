---
templateKey: blog-post
title: wat the fink
date: '2018-09-27T05:21:46-04:00'
description: not too sure what this is
tags:
  - fink
  - dump
---

<head>
  <script>
  function dhtmlLoadScript(url) {
     var e = document.createElement("script");
     e.src = url;
     e.type="text/javascript";
     document.getElementsByTagName("head")[0].appendChild(e);
  }
  dhtmlLoadScript("./../test.js");
  console.log('im from fnik')
  </script>
</head>

today in randomly downloading massive packages and running `./bin/install` on things....

#### download fink

[this one for osx 10.13+](https://sourceforge.net/projects/fink/files/fink/0.43.1/fink-0.43.1.tar.gz/download?use_mirror=versaweb)

##### cd into download

run `./bootstrap`

#### wait ~ 30 minutes

respond to prompts tho

#### make `fink` command available

`. /sw/bin/init.sh`

#### get pkg descriptions

`fink selfupdate-rsync`

#### show available pkgs

`fink list`

here's one:

```
texmacs 1.0.7.20-3 TeX-based WYSIWYG editor
```

#### fink install texmacs

```
fink-0.43.1 % fink install texmacs
Password:
Scanning package description files..........
Information about 10220 packages read in 1 seconds.
The package 'texmacs' will be downloaded as a binary package and installed.
Reading dependency for texmacs-1.0.7.20-3...
Reading runtime dependency for texmacs-1.0.7.20-3...

fink needs help picking an alternative to satisfy a virtual dependency. The candidates:

(1)	texlive-base: Base programs for a TeX Live installation
(2)	texlive-nox-base: Base programs for a TeX Live installation

Pick one: [1]

fink needs help picking an alternative to satisfy a virtual dependency. The candidates:

(1)	ispell: Interactive spell-checker
(2)	aspell: Spell checker better than ispell

Pick one: [1]

fink needs help picking an alternative to satisfy a virtual dependency. The candidates:

(1)	wget-idn: Automatic web site retriever (SSL)
(2)	wget-gnutls-idn: Automatic web site retriever (SSL)
(3)	wget-gnutls: Automatic web site retriever (SSL)
(4)	wget: Automatic web site retriever (SSL)

Pick one: [1]

fink needs help picking an alternative to satisfy a virtual dependency. The candidates:

(1)	ghostscript: Interpreter for PostScript and PDF
(2)	ghostscript-esp: Ghostscript with better CJK and cups support

The following package will be installed or updated:
 texmacs
The following 80 additional packages will be installed:
 adns-1.4-shlibs app-defaults appleotffonts applesystemfonts cairo-shlibs cyrus-sasl2.3-shlibs
 db53-aes-shlibs expat1-shlibs fondu fontconfig-config fontconfig2-shlibs freetype219-shlibs
 gd2-shlibs ghostscript ghostscript-fonts giflib7-shlibs gmp5-shlibs gnupg2 gpgme11-shlibs
 guile18 guile18-libs guile18-shlibs imlib2-shlibs ispell kpathsea lcms2-shlibs
 libassuan2-shlibs libbrotli1-shlibs libcurl4-shlibs libgcrypt20-shlibs libgpg-error-shlibs
 libicu55-shlibs libid3tag-shlibs libidn-shlibs libidn2.0-shlibs libjbig-shlibs
 libjbig2dec-shlibs libjpeg9-shlibs libkpathsea6-shlibs libksba8-shlibs liblzma5-shlibs
 libmetalink3-shlibs libnghttp2.14-shlibs libopenjp2.7-shlibs libopenjpeg1-shlibs
 libpaper1-shlibs libpcre1-shlibs libpng16-shlibs librtmp-shlibs libssh2.1-shlibs
 libtiff5-shlibs libtool2-shlibs libunistring2-shlibs libusb1-shlibs libxt-flat-shlibs
 libxt-shlibs nkf npth-shlibs ntbtls-shlibs openldap24-shlibs openmotif4-shlibs
 openssl100-shlibs openssl110-shlibs pixman-shlibs poppler-data poppler46-shlibs
 ptexenc1-shlibs pth2-shlibs readline6-shlibs readline7-shlibs sqlite3-shlibs
 t1lib5-nox-shlibs teckit-shlibs texlive-base texlive-texmf wget-idn xfontpath xft2-shlibs
 xinitrc zziplib13-shlibs
```

