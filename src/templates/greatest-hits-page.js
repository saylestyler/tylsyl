import React from 'react';
import Content, { HTMLContent } from '../components/Content';
import graphql from 'graphql';

export const GreatestHitsPageTemplate = ({ 
  title, 
  content, 
  contentComponent 
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="about-page">
      <h2>{title}</h2>
      <PageContent className="content" content={content} />
    </section>
  );
};

const GreatestHitsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return <GreatestHitsPageTemplate 
           contentComponent={HTMLContent} 
           title={post.frontmatter.title} 
           content={post.html}
         />;
};

export default GreatestHitsPage;

export const aboutPageQuery = graphql`
  query GreatestHitsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
