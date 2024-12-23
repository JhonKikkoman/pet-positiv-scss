import React from 'react';

import Item, { logoNameT } from './HeroItem';

const arrLogo: logoNameT[] = [
  'amazon',
  'dribble',
  'hubSpot',
  'netflix',
  'notion',
  'zoom',
];

export default function Hero(): React.JSX.Element {
  return (
    <section className="section section-hidden-x container">
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
              src="./src/css/images/Illustration.svg"
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
              {arrLogo.map((logo, index) => (
                <Item key={`${logo}+${index}`} logoName={logo} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
