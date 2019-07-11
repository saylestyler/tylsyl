import React from 'react'
import Link from 'gatsby-link'
import Image from '../components/Image'
import MetaPost from '../components/MetaPost'
export default props => {
  const post = props.data.markdownRemark
  const url = props.data.site.siteMetadata.url
  const pathname = props.location.pathname
  const { title, description, thumbnail, date, rawDate } = post.frontmatter
  const { next, prev } = props.pathContext
  const author = props.data.site.siteMetadata.author
  return (
    <div>
      <div className='main-body'>
        <MetaPost
          title={title}
          description={description}
          thumbnail={thumbnail}
          date={rawDate}
          url={url}
          pathname={pathname}
        />
        <Link to={'/'}>Home</Link>
        <h1>{title}</h1>
        <div className='date-time'>
          <span>{date} | {author}</span>
          {/* <span>{post.timeToRead} min read</span> */}
        </div>
        {thumbnail && <Image all={thumbnail} text={title.trim(5)} />}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <ul className='pager'>
        {prev && (
          <li className='prev'>
            <Link to={prev.fields.slug}>Previous Post</Link>
          </li>
        )}
        {next && (
          <li className='next'>
            <Link to={next.fields.slug}>Next Post</Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        description
        thumbnail
        date(formatString: "MMM Do")
        rawDate:date
      }
    }

    site {
      siteMetadata {
        url
        author
      }
    }
  }
`
