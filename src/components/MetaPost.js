import React from 'react'
import Helmet from 'react-helmet'

const MetaPost = (props) => (
  <Helmet
    title={props.title}
    meta={[
      { name: 'title', content: props.title },
      { name: 'description', content: props.description },
      {
        property: 'og:title',
        content: props.title
      },
      {
        property: 'og:url',
        content: props.url + props.pathname
      },
      {
        property: 'og:image',
        content:
        props.thumbnail && props.url + props.thumbnail
      },
      {
        property: 'og:description',
        content: props.description
      },
      {
        name: 'twitter:description',
        content: props.description
      },
      {
        name: 'twitter:image:src',
        content:
        props.thumbnail &&
        props.url + props.thumbnail
      },
      {
        rel: 'author',
        href: 'https://twitter/saylesopenhauer'
      },
      { property: 'author', content: 'Tyler Sayles' },
      { property: 'og:type', content: 'article' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        property: 'article:publisher',
        content: 'https://www.twitter.com/@saylesopenhauer'
      },
      { property: 'article:author', content: 'Tyler Sayles' },
      { name: 'robots', content: 'index, follow' },
      {
        property: 'article:published_time',
        content: props.date
      },
      { name: 'twitter:creator', content: '@saylesopenhauer' },
      { property: 'og:site_name', content: 'saylesopenhauer' }
    ]}
  />
)

export default MetaPost
