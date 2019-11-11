import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Categories from '../components/Categories';

class NotFoundRoute extends React.Component {
  render() {
    console.log(this.props);
    const { menu, categories } = this.props.data.site.siteMetadata;
    return (
      <Layout>
        <Header menu={menu} title={'Page not found...'}>
          <Categories categories={categories} />
        </Header>
        <article className="post">
          <section className="longform drop container container--narrow">
            <div style={{ textAlign: 'center' }}>Oops!</div>
          </section>
        </article>
      </Layout>
    );
  }
}

export default NotFoundRoute;

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        categories
        author {
          name
          twitter
        }
      }
    }
  }
`;
