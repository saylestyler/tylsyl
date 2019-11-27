---
title: Switching from Gatsby to VuePress
date: 2019-11-13 20:47:18
excerpt: Starting a new job? Redo your website w/ their techstack! Win employee of the month!
type: post
blog: true
tags:
    - tutorial
    - vuepress
    - gatsby
    - javascript
---

[[toc]]

## motivation

1. I start a new job @ LaaSie.ai this month (wee excited! :)) thither they use Vue + Python, both of which I haven't used professionally too much. I figured redoing my blog (this blog... (meta, ik)) would be a gr8 way to Truly Learn.

2. Cuz I felt like it! (SSGs are cool)

## things i had 2 do

### clone the boiler plate repo

i used <https://vuepress.vuejs.org/> + <https://github.com/bencodezen/vuepress-blog-boilerplate>

### changing frontmatter blocks

The frontmatter for this post looks like:

```yaml
---
title: Switching from Gatsby to VuePress
date: 2018-12-09 20:47:18
excerpt: Starting a new job? Redo your website w/ their techstack! Win employee of the month!
type: post
blog: true
tags:
    - VuePress
    - Gatsby
    - JavaScript
---
```

The frontmatter for all of my Gatsby blog posts looked like this 
```yaml
---
title: browser dump
date: '2018-10-06T22:34:58-04:00'
description: opera dev edition
templateKey: blog-post
tags:
  - opera
  - javascript
  - browser
---
```

In summary: 

1. add the kvp `blog: true`
2. add the kvp `type: post`
3. change description -> excerpt (ik, ik they're not the same, but for my purposes this was a good switch anywho, sue me)
4. _change the dread date formatting_ :scream:

I knew I could do a big ole find-n-replace * but I'd always wanted to use `sed` and so here's how I did: 

```bash
sed -E $(whoamijk) -jxPr '' old-blog/src/posts "templateKey" ""
```

just kidding: I realized soon that I'd dramatized sed (bc of it's combo w/ awk and other pipe-y unix things) and it was the same as using the RE box in VSCode only this time, w/ no gorgina preview:

![altylsyl](https://res.cloudinary.com/cloudimgts/image/upload/v1574551616/a0pt5aidnyu9acjkqcro.png)

For the dates I thought of how to find all date occurences `/date.*\, destringify them, split it on T for Timezone, and then strip the seconds of the timezone. My mind withstood about 2 minutes of this genre and came up with a much quicker alternative: 

![dates](https://res.cloudinary.com/cloudimgts/image/upload/v1574551982/nxqmxi4rv6kixjt1acjh.png)

In a similar swap from Jekyll -> Gatsby (notice a pattern?) I basically did something of the same with the dates. I also (opinion my won) think that time of publishing down to the second (even day, I'm good with months normally) is silly, but gatsby generated these timestamps automatically when creating a page with netlify's CMS.

So instead, I replaced every date with the same one at the same hour, then went thru (had been looking for an excuse to do this anywho since the jekyll switch) and then approximate at least by the year.

## netlify's CMS

1. first deploy a site from git on netlify
2. for the configuration, provided you're using the same boilerplate, use these settings (otherwise, but whatever dir it is you publish to (mb dist (with no forward slash)))

![altylsyl](https://res.cloudinary.com/cloudimgts/image/upload/v1574557185/qe2vhpcprjehmrxnqf3p.png)

3. adding CMS capabilities


## things i thought were cool

### auto-included plugins

1. TOC plugin

```
[[toc]]
```

i tried doing this once w/ gatsby using w/ vim using a regex programmatically and then i never tried agian :shrug:

it even handles nested headers

2. emoji support :ok:

also auto supported ~ i don't really use them a lot but i the fact that i _could_ was cool

3. what's that janitor one?

### algolia

see that lil search box in the navbar? i did 0 to make that work

### ease of page creation

All i did to add the [about](/about) page was create an `about.md` file in the root et vwa-freakin-la. To do so in gatsby is an ordeal in comparaison.

### embed vue components

With Gatsby to embed components in md files you had to use MDX which comes w/ its own drama of configuration. 

I typed this originally thinking that it couldn't possibly embed my archive component in a blog post (because such is the way of MDX: special pages only) but mashallah with:

```
<ArchiveList :pages="$site.pages" />
```

you get:

<ArchiveList :pages="$site.pages" />

## things I didn't like

1. home page

In frontmatter there is a `home: true` key that seemingly works like... is this the home page?

(tiny thing)

2. another thing?

I may have been using it for 2 short a time, but I can't really think of anything else?

## how bout broformance tho :100:

I took an audit of my gatsby site before I switched and then me VuePress. My Gatsby site (as barebones as they come) scored across the board 80s-90s. Not VuePress. Bro, it was legit :100: in perf bro:

![altylsyl](https://res.cloudinary.com/cloudimgts/image/upload/v1574557384/p0yjuxcizjjv2snoylix.png)

I'm sure after more fiddling I can get all these numbers up but mighty impressive to come out swingin' with no modifications.

## summary

I'm a convert. Clearly ^.^
