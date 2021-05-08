---
title: Home
home: true
footer: 'tylsyl.com 2021'
---
<!-- if u want some tex in the footer, you would put it as footer value -->
<!-- eg. footer: Apache/2.4.18 (Ubuntu) Server at localhost Port 80 -->

<BlogPostList
  :pages="$site.pages"
  :page-size="$site.themeConfig.pageSize"
  :start-page="$site.themeConfig.startPage"
/>
