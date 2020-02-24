import React from 'react';
import Header from './Header';
import Categories from './Categories';
import background from '../assets/background.jpg';

const PageTemplateDetails = props => {
  const { data } = props;
  const { menu, categories } = data.site.siteMetadata;
  const { content, title } = data.wordpressPage;

  return (
    <React.Fragment>
      <Header menu={menu} background={background} title={title}>
        <Categories categories={categories} />
      </Header>
      <article className="post">
        <section className="longform drop container container--narrow">
          {/* TODO: figure out avatar */}

          {/* <div style={{ textAlign: 'center' }}>
            {avatar ? <img className="avatar" alt="avatar" src={avatar.publicURL} /> : null}
          </div> */}
          <div
            /* eslint-disable-next-line react/no-danger */
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </section>
      </article>
    </React.Fragment>
  );
};

export default PageTemplateDetails;
