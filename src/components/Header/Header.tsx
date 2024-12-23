import React from 'react';

import BurgerMenu from './BurgerMenu';
import Nav from './Nav';

export default function Header(): React.JSX.Element {
  return (
    <header className="header">
      <div className="header__inner container">
        <a href="/" className="header__logo logo">
          <img
            src="/src/css/images/logo.svg"
            alt="positivus"
            className="logo__image"
            width="220"
            height="36"
            loading="lazy"
          />
        </a>
        <Nav />
        <button
          className="header__button button button-transparent hidden-mobile"
          type="button"
        >
          Request a quote
        </button>
        <BurgerMenu />
      </div>
    </header>
  );
}
