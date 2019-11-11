import React from 'react';
import { Link } from 'gatsby';
import Header from './Header';
import Categories from './Categories';

class PostTemplateDetails extends React.Component {
  render() {
    const { categories, menu } = this.props.data.site.siteMetadata;
    const { html } = this.props.data.markdownRemark;
    const { title, background, date } = this.props.data.markdownRemark.frontmatter;

    return (
      <React.Fragment>
        <Header date={date} background={background.publicURL} title={title} menu={menu}>
          <Categories categories={categories} />
        </Header>
        <article className="post">
          <section
            className="longform drop container container--narrow"
            dangerouslySetInnerHTML={{ __html: html + '<hr />' }}
          ></section>
          <div className="container container--narrow">
            <Link className="button" to="/">
              Read more posts
            </Link>
          </div>
        </article>
      </React.Fragment>
    );
  }
}

export default PostTemplateDetails;
