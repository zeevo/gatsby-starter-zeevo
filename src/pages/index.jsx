import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Blog from '../components/Blog';

const IndexRoute = props => {
  const { data } = props;
  const { title, subtitle } = data.site.siteMetadata;

  return (
    <Layout>
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={subtitle} />
        </Helmet>
        <div />
        <Blog {...props} />
      </div>
    </Layout>
  );
};

export default IndexRoute;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        profilePic
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
    allWordpressPost(
      sort: { order: DESC, fields: date }
      filter: { title: { regex: "/^((?!dummy).)*$/igm" } }
    ) {
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
