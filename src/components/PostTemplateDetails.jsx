import React from 'react';
import { Link } from 'gatsby';
import Header from './Header';
import Categories from './Categories';

const PostTemplateDetails = props => {
  const { data } = props;
  const { categories, menu } = data.site.siteMetadata;
  const { title, date, content, featured_media: featuredMedia } = data.wordpressPost;

  return (
    <React.Fragment>
      <Header date={date} background={featuredMedia.source_url} title={title} menu={menu}>
        <Categories categories={categories} />
      </Header>
      <article className="post">
        <section
          className="longform drop container container--narrow"
          dangerouslySetInnerHTML={{ __html: `${content}<hr />` }}
        />
        <div className="container container--narrow">
          <Link className="button" to="/">
            Read more posts
          </Link>
        </div>
      </article>
    </React.Fragment>
  );
};

export default PostTemplateDetails;
