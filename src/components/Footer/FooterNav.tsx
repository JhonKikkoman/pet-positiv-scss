import React from 'react';

import logoLight from '../../css/images/logo-light.svg';

type arrNavLinkTitleT = { title: string };

const arrNavLinkTitle: arrNavLinkTitleT[] = [
  { title: 'About us' },
  { title: 'Services' },
  { title: 'Use Cases' },
  { title: 'Pricing' },
  { title: 'Blog' },
];

export default function FooterNav(): React.JSX.Element {
  return (
    <div className="footer__navigation">
      <a href="/" className="footer__logo logo">
        <img
          src={logoLight}
          alt="positivus"
          className="logo__image"
          width="180"
          height="29"
          loading="lazy"
        />
      </a>
      <nav className="footer__menu">
        <ul className="footer__menu-list">
          {arrNavLinkTitle.map((el, index) => (
            <li key={`${el.title}_${index}`} className="footer__menu-item">
              <a href="/" className="footer__menu-link">
                {el.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer__soc1als soc1als">
        <ul className="soc1als__list">
          <li className="soc1als__item">
            <a href="/" className="soc1als__link">
              <span className="visually-hidden">LinkedIn</span>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.317757 17H3.81308V5.68438H0.317757V17Z"
                  fill="#B9FF66"
                />
                <path
                  d="M0 2.07188C0 3.1875 0.900311 4.09062 2.06542 4.09062C3.17757 4.09062 4.07788 3.1875 4.07788 2.07188C4.07788 0.95625 3.17757 0 2.06542 0C0.900311 0 0 0.95625 0 2.07188Z"
                  fill="#B9FF66"
                />
                <path
                  d="M13.4517 17H17V10.7844C17 7.75625 16.3115 5.36562 12.7632 5.36562C11.0685 5.36562 9.90343 6.32188 9.42679 7.225H9.37383V5.68438H6.03738V17H9.53271V11.4219C9.53271 9.93437 9.79751 8.5 11.6511 8.5C13.4517 8.5 13.4517 10.2 13.4517 11.475V17Z"
                  fill="#B9FF66"
                />
              </svg>
            </a>
          </li>
          <li className="soc1als__item">
            <a href="/" className="soc1als__link">
              <span className="visually-hidden">Twitter</span>
              <svg
                width="17.613281"
                height="14.303711"
                viewBox="0 0 17.6133 14.3037"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs />
                <path
                  id="twitter"
                  d="M15.82 3.54C16.5 3.03 17.13 2.41 17.61 1.68C16.99 1.96 16.26 2.17 15.54 2.24C16.3 1.79 16.85 1.1 17.13 0.24C16.44 0.65 15.64 0.96 14.85 1.13C14.16 0.41 13.23 0 12.2 0C10.2 0 8.58 1.62 8.58 3.61C8.58 3.89 8.61 4.17 8.68 4.44C5.68 4.27 2.99 2.82 1.2 0.65C0.89 1.17 0.72 1.79 0.72 2.48C0.72 3.72 1.34 4.82 2.34 5.48C1.75 5.44 1.17 5.3 0.68 5.03L0.68 5.06C0.68 6.82 1.92 8.27 3.58 8.61C3.3 8.68 2.96 8.75 2.65 8.75C2.41 8.75 2.2 8.71 1.96 8.68C2.41 10.13 3.75 11.16 5.34 11.2C4.1 12.16 2.55 12.75 0.86 12.75C0.55 12.75 0.27 12.71 0 12.68C1.58 13.71 3.48 14.3 5.54 14.3C12.2 14.3 15.82 8.82 15.82 4.03C15.82 3.86 15.82 3.72 15.82 3.54Z"
                  fill="#000000"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
              </svg>
            </a>
          </li>
          <li className="soc1als__item">
            <a href="/" className="soc1als__link">
              <span className="visually-hidden">Facebook</span>
              <svg
                fill="#000000"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 512 512"
              >
                <g id="7935ec95c421cee6d86eb22ecd11b7e3">
                  <path
                    d="M283.122,122.174c0,5.24,0,22.319,0,46.583h83.424l-9.045,74.367h-74.379
                    c0,114.688,0,268.375,0,268.375h-98.726c0,0,0-151.653,0-268.375h-51.443v-74.367h51.443c0-29.492,0-50.463,0-56.302
                    c0-27.82-2.096-41.02,9.725-62.578C205.948,28.32,239.308-0.174,297.007,0.512c57.713,0.711,82.04,6.263,82.04,6.263
                    l-12.501,79.257c0,0-36.853-9.731-54.942-6.263C293.539,83.238,283.122,94.366,283.122,122.174z"
                  ></path>
                </g>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
