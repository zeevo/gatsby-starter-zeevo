import React from 'react';

import Header from './Header';
import Categories from './Categories';
import Feed from './Feed';

const Blog = props => {
  const { data } = props;

  const { title, subtitle, menu } = data.site.siteMetadata;

  const categories = data.allWordpressPost.edges
    .map(edge => edge.node.categories)
    .reduce((accumulator, cats) => accumulator.concat(cats), [])
    .map(cate => cate.name)
    .reduce((uniques, item) => (uniques.includes(item) ? uniques : [...uniques, item]), [])
    .filter(name => name.toLowerCase() !== 'uncategorized');

  return (
    <React.Fragment>
      <Header title={title} menu={menu} subtitle={subtitle}>
        <Categories categories={categories} />
      </Header>
      <main className="container container--narrow js-blog-posts">
        <Feed posts={data.allWordpressPost.edges} />
      </main>
    </React.Fragment>
  );
};

export default Blog;
