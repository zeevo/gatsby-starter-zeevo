import React from 'react';
import Header from './Header';
import Categories from './Categories';
import Feed from './Feed';

const CategoryTemplateDetails = props => {
  const { data, pageContext } = props;
  const { category } = pageContext;
  const { edges } = data.allWordpressPost;
  const { categories, menu } = data.site.siteMetadata;

  return (
    <React.Fragment>
      <Header menu={menu} title={category}>
        <Categories categories={categories} />
      </Header>
      <main className="container container--narrow">
        <Feed posts={edges} />
      </main>
    </React.Fragment>
  );
};

export default CategoryTemplateDetails;
