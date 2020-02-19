import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PageTemplateDetails from '../components/PageTemplateDetails';

class PageTemplate extends React.Component {
  render() {
    // TODO
    return <p>TODO</p>;

    const { title, subtitle } = this.props.data.site.siteMetadata;
    const page = this.props.data.markdownRemark;
    const { title: pageTitle, description: pageDescription } = page.frontmatter;
    const description = pageDescription !== null ? pageDescription : subtitle;

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${pageTitle} - ${title}`}</title>
            <meta name="description" content={description} />
          </Helmet>
          <PageTemplateDetails {...this.props} />
        </div>
      </Layout>
    );
  }
}

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
    }
  }
`;
