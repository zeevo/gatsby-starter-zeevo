import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PageTemplateDetails from '../components/PageTemplateDetails';

const PageTemplate = props => {
  const { data } = props;
  const { title: siteTitle } = data.site.siteMetadata;
  const { title: postTitle, description, tags } = data.wordpressPage;

  return (
    <Layout>
      <div>
        <Helmet>
          <title>{`${postTitle} - ${siteTitle}`}</title>
          <meta name="description" content={description} />
          <meta name="tags" {...(tags ? { content: tags.join(',') } : {})} />
        </Helmet>
        <PageTemplateDetails {...props} />
      </div>
    </Layout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        profilePic
        categories
        menu {
          label
          path
          external
        }
        author {
          name
          twitter
        }
      }
    }
    wordpressPage(id: { eq: $id }) {
      id
      title
      date
      excerpt
      content
      type
      slug
      author {
        name
      }
      featured_media {
        source_url
        title
      }
    }
    allWordpressPage {
      edges {
        node {
          id
          slug
          title
        }
      }
    }
    allWordpressPost {
      distinct(field: categories___name)
    }
  }
`;
