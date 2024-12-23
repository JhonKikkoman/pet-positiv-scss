import React from 'react';

export default function ServiceBanner(): React.JSX.Element {
  return (
    <div className="services__banner banner">
      <div className="banner__inner">
        <div className="banner__body">
          <h3 className="banner__title">Let’s make things happen</h3>
          <div className="banner__description">
            <p>
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
          </div>
          <button className="banner__button button" type="button">
            Get your free proposal
          </button>
        </div>
        <img
          src="/src/css/images/banner-bg.svg"
          alt=""
          className="banner__image hidden-mobile"
          width="493"
          height="394"
          loading="lazy"
        />
      </div>
    </div>
  );
}
