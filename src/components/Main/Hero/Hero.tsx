import React from 'react';

import illustration from '../../../css/images/Illustration.svg';

const heroLogoArr = Object.keys(
  import.meta.glob('/src/css/images/partners/*.svg', {
    query: 'url',
  }),
);

export default function Hero(): React.JSX.Element {
  return (
    <section className="section section--hidden-x container">
      <div className="section__body">
        <div className="hero">
          <div className="hero__main">
            <div className="hero__body">
              <h1 className="hero__title">
                Navigating the digital landscape for success
              </h1>
              <div className="hero__description">
                <p>
                  Our digital marketing agency helps businesses grow and succeed
                  online through a range of services including SEO, PPC, social
                  media marketing, and content creation.
                </p>
                <button className="hero__button button" type="button">
                  Book a consultation
                </button>
              </div>
            </div>
            <img
              src={illustration}
              alt="hero-image"
              className="hero__image"
              width="600"
              height="515"
              loading="lazy"
            />
          </div>
          <div className="hero__partners">
            <ul className="hero__partners-list">
              <h2 className="visually-hidden">Our partners</h2>
              {heroLogoArr.map((src, index) => (
                <li key={index} className="hero__partners-item">
                  <img
                    src={src}
                    alt="logo"
                    className="hero__partners-image"
                    width="130"
                    height="48"
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
