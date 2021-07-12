[tylsyl.com](https://www.tylsyl.com)

hehe: [![Netlify Status](https://api.netlify.com/api/v1/badges/115e104e-3e27-4e90-a895-381d3265c285/deploy-status)](https://app.netlify.com/sites/tylsyl/deploys)


`cd proj-dir; yarn; yarn dev;`

[based on](https://github.com/bencodezen/vuepress-blog-boilerplate)

**.git/hooks/post-commit**

```zsh
#!/usr/local/bin/zsh

echo "\n\n\n\t https://app.netlify.com/sites/tylsyl/overview \n\n\n"
```
https://observatory.mozilla.org/analyze/tylsyl.com

**publishing**

must have blog true to pass filteredList() in BlogPostList

```yaml
type: blog
blog: true
```

tags must be formatted like:

```yaml
tags:
  - tag
```

if formatted like

```yaml
tags: tag
```

the string will be split & each char a separate `t a g`
