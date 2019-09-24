import React from 'react';
import Content, { HTMLContent } from '../components/Content';
import graphql from 'graphql';

export const WritingPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className='section section--gradient'>
      <h2>{title}</h2>
      <PageContent className='content' content={content} />
    </section>
  );
};

const WritingPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <WritingPageTemplate contentComponent={HTMLContent} title={post.frontmatter.title} content={post.html} />
  );
};

export default WritingPage;

export const aboutPageQuery = graphql`
  query WritingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
