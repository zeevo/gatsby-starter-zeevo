import React from 'react';
import Navbar from './Navbar';
import moment from 'moment';
import defaultBackground from '../../static/background.jpg';

export default function Header(props) {
  const { title, date, menu } = props;

  const background = props.background || defaultBackground;
  return (
    <header className="header header--cover" style={{ backgroundImage: `url(${background})` }}>
      <Navbar menu={menu} />
      <section className="header__header container">
        <h1>{title}</h1>
        {date ? moment(date).format('MMMM D, YYYY') : null}
      </section>
      {props.children}
    </header>
  );
}
