import Header from './Header';
import React from 'react';
import PostPreview from './PostPreview';
import Categories from './Categories';
import Feed from './Feed';

const Blog = props => {
  const { title, categories, menu } = props.data.site.siteMetadata;

  return (
    <React.Fragment>
      <Header title={title} menu={menu}>
        <Categories categories={categories} />
      </Header>
      <main className="container container--narrow js-blog-posts">
        <Feed posts={props.data.allMarkdownRemark.edges} />
      </main>
    </React.Fragment>
  );
};

export default Blog;
