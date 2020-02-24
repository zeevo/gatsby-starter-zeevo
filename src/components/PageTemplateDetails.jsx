import React from 'react';
import Header from './Header';
import Categories from './Categories';

const PageTemplateDetails = props => {
  const { data } = props;
  const { menu, categories } = data.site.siteMetadata;
  const { html } = data.markdownRemark;
  const { background, title, avatar } = data.markdownRemark.frontmatter;

  return (
    <React.Fragment>
      <Header menu={menu} background={background.publicURL} title={title}>
        <Categories categories={categories} />
      </Header>
      <article className="post">
        <section className="longform drop container container--narrow">
          <div style={{ textAlign: 'center' }}>
            {avatar ? <img className="avatar" alt="avatar" src={avatar.publicURL} /> : null}
          </div>
          <div
            /* eslint-disable-next-line react/no-danger */
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </section>
      </article>
    </React.Fragment>
  );
};

export default PageTemplateDetails;
