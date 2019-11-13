import React from 'react';
import Header from './Header';
import Categories from './Categories';

const PageTemplateDetails = props => {
  const { menu, categories } = props.data.site.siteMetadata;
  const { html } = props.data.markdownRemark;
  const { background, title, avatar } = props.data.markdownRemark.frontmatter;
  console.log(props);
  return (
    <React.Fragment>
      <Header menu={menu} background={background.publicURL} title={title}>
        <Categories categories={categories} />
      </Header>
      <article className="post">
        <section className="longform drop container container--narrow">
          <div style={{ textAlign: 'center' }}>{avatar ? <img className="avatar" src={avatar.publicURL} /> : null}</div>
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
