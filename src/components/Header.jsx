import React from 'react';
import '../styles/header.scss';

function Header(props) {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__menu menu">
          <nav className="menu__body">
            <ul className="menu__list">{props.children}</ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
