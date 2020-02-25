import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import CategoryTemplateDetails from '../components/CategoryTemplateDetails';

const CategoryTemplate = props => {
  const { data, pageContext } = props;
  const { title } = data.site.siteMetadata;
  const { category } = pageContext;

  return (
    <Layout>
      <div>
        <Helmet>
          <title>{`${category} - ${title}`}</title>
          <meta name="description" content={`${title} - ${category}`} />
        </Helmet>
        <CategoryTemplateDetails {...props} />
      </div>
    </Layout>
  );
};

export default CategoryTemplate;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
          external
        }
        categories
        author {
          name
          twitter
        }
      }
    }
    allWordpressPost(limit: 1000, sort: { order: DESC, fields: date }) {
      edges {
        node {
          title
          date
          excerpt
          type
          slug
          author {
            name
          }
          categories {
            name
          }
          featured_media {
            source_url
            title
          }
        }
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
  }
`;
