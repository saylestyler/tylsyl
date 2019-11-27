---
title: Home
home: true
# heroText: Hero
# tagline: Some tagline
# actionText: Go To Github
# actionLink: https://github.com/bencodezen/vuepress-blog-boilerplate
# features:
# - 
#     title: Feature 1
#     details: Feature Details
# - 
#     title: Feature 2
#     details: Feature Details
# - 
#     title: Feature 3
#     details: Feature Details
footer: This is a footer
---

<!-- 
    this is a blog list component
    so if u want yr blog posts... anywhere, then plop this in
-->

<BlogPostList
  :pages="$site.pages"
  :page-size="$site.themeConfig.pageSize"
  :start-page="$site.themeConfig.startPage"
/>