---
templateKey: blog-post
title: regex dump
date: '2018-06-12T14:03:43-04:00'
description: 'if u think it''s not worth it to not figure out a regex, don '
tags:
  - regex
---

# `/$/,/g` add to end of every line

`:%s/$/,/` will add a comma 									to, 
<br/>											the, 
<br/>											end, 
<br/>											of, 
<br/>											every,
<br/>
line,

(vim) do a subset of lines instead of the whole file, specify them in place of the %.

One way is to do a visual select and then type the :. It will fill in :'<,'> for you, then you type the rest of it (Notice you only need to add s/$/,/)

`:'<,'>s/$/,/`

# too many spaces before commas?

`:%s/\s ,/,/g`

ditto simply replacing stuff, but: 

`:%s/\s ,/;/g`
