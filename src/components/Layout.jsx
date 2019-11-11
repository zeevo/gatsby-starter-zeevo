import React from 'react';
import Helmet from 'react-helmet';
import '../assets/fonts/fontello-771c82e0/css/fontello.css';
import '../assets/css/main.css';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="layout">
        <Helmet defaultTitle="Gatsby Starter Zeevo" />
        {children}
      </div>
    );
  }
}

export default Layout;
