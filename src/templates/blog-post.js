import React from 'react';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import graphql from 'graphql';
import Content, { HTMLContent } from '../components/Content';

export const BlogPostTemplate = ({ content, contentComponent, description, tags, title, helmet }) => {
  const PostContent = contentComponent || Content;
  return (
    <div className="blog-post-wrapper">
      {helmet || ''}
      <h1 className="post-title">{title}</h1>

      {tags && tags.length ? (
        <ul className="tag-list">
          {tags.map(tag => (
            <li className="tag-list-item" key={tag + `tag`}>
              <Link to={`/tags/${kebabCase(tag)}/`}># {tag}</Link>
            </li>
          ))}
        </ul>
      ) : null}

      <p className="post-description">{description}</p>
      <PostContent className="post-content" content={content} />

      <div className="footer">
        <Link className="index-link" to={'/'}>
          Back
        </Link>
      </div>
    </div>
  );
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | Blog`} description={`${post.frontmatter.description}`} keywords={`${post.frontmatter.tags}`} />}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
