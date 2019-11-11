import React from 'react';
import Header from './Header';
import PostPreview from './PostPreview';
import Categories from './Categories';
import Feed from './Feed';

const CategoryTemplateDetails = props => {
  const { category } = props.pageContext;
  const { edges } = props.data.allMarkdownRemark;
  const { categories, menu } = props.data.site.siteMetadata;

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
