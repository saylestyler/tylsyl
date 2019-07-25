import React from 'react';
import Content, { HTMLContent } from '../components/Content';
import graphql from 'graphql';

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className='section section--gradient'>
      <h2>{title}</h2>
      <PageContent className='content' content={content} />
    </section>
  );
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <AboutPageTemplate contentComponent={HTMLContent} title={post.frontmatter.title} content={post.html} />
  );
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
