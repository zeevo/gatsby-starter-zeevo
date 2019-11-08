import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import CategoryTemplateDetails from '../components/CategoryTemplateDetails';

class CategoryTemplate extends React.Component {
  render() {
    const { title } = this.props.data.site.siteMetadata;
    const { category } = this.props.pageContext;

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${category} - ${title}`}</title>
            <meta name="description" content={'place holder description'} />
          </Helmet>
          <CategoryTemplateDetails {...this.props} />
        </div>
      </Layout>
    );
  }
}

export default CategoryTemplate;

export const pageQuery = graphql`
  query CategoryPage($category: String) {
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
        author {
          name
          twitter
        }
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { category: { eq: $category }, layout: { eq: "post" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          timeToRead
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
            background {
              publicURL
            }
          }
        }
      }
    }
  }
`;
