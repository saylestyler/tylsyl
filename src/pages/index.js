import React from 'react';
import Link from 'gatsby-link';
import graphql from 'graphql';

export default class IndexPage extends React.Component {
  render () {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <main className='main'>
        <section className='grid'>
          {
            posts.map(
              ({ node: post }) => (
                <div className='post-list-container'
                  key={post.id}>
                  <Link className='post-list-title'
                    to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <p className='post-list-date'>
                    {post.frontmatter.date}
                  </p>
                </div>
              )
            )
          }
        </section>
      </main>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM, YYYY")
          }
        }
      }
    }
  }
`;
