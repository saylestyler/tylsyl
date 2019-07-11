import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Pagination from '../components/pagination'
import icon from '../img/favicon.ico'
import 'normalize.css' // normalize.css npm
import './global.css'

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

const IndexPages = ({ data, pathContext }) => {
  const { group, index, first, last, pageCount } = pathContext
  const previousUrl = index - 1 == 1 ? '' : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  return (
    <div>
      <div>
        <Helmet>
          <link rel='icon' href={icon} /> 
          <title>Tyler Sayles | dev dump | github.com/saylestyler</title>
          <meta name='description' content='blog dev dump postmortem' />
        </Helmet>

        {group.map(({ node }, i) => (
          <Link
            key={i}
            to={node.fields.slug}>
            <ul className='posts'>
              <h1>{node.frontmatter.title}</h1>
              {/* <span>
                {node.frontmatter.date} &nbsp;
                {node.timeToRead}min read
              </span>
              <p>{node.excerpt}</p> */}
            </ul>
          </Link>
        ))}
      </div>

      <Pagination
        NavLink={NavLink}
        first={first} last={last} previousUrl={previousUrl}
        nextUrl={nextUrl} />
    </div>
  )
}
export default IndexPages
