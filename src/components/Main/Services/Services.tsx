import React from 'react';

import LinkItem from './LinkItem';
import ServiceBanner from './ServiceBanner';
import ServiceHeader from './ServiceHeader';

export default function Services(): React.JSX.Element {
  return (
    <section className="section container">
      <ServiceHeader />
      <div className="section__body">
        <div className="services">
          <ul className="services__list grid grid--2">
            <li className="services__item">
              <article className="service-card ">
                <div className="service-card__body">
                  <h3 className="service-card__title">
                    <span className="puddle-bg">Search engine</span>
                    <span className="puddle-bg ">optimization</span>
                  </h3>
                  <LinkItem />
                </div>
                <img
                  src="../src/css/images/services/1.svg"
                  alt=""
                  className="service-card__image"
                  width="210"
                  height="170"
                  loading="lazy"
                />
              </article>
            </li>
            <li className="services__item">
              <article className="service-card service-card--accent-bg">
                <div className="service-card__body">
                  <h3 className="service-card__title">
                    <span className="puddle-bg puddle-bg--light">
                      Pay-per-click
                    </span>
                    <span className="puddle-bg puddle-bg--light">
                      advertising
                    </span>
                  </h3>
                  <LinkItem />
                </div>
                <img
                  src="../src/css/images/services/2.svg"
                  alt=""
                  className="service-card__image"
                  width="210"
                  height="170"
                  loading="lazy"
                />
              </article>
            </li>
            <li className="services__item">
              <article className="service-card service-card--dark-bg">
                <div className="service-card__body">
                  <h3 className="service-card__title">
                    <span className="puddle-bg puddle-bg--light">
                      Social Media
                    </span>
                    <span className="puddle-bg puddle-bg--light">
                      Marketing
                    </span>
                  </h3>

                  <LinkItem className="service-card__link--light" />
                </div>
                <img
                  src="../src/css/images/services/3.svg"
                  alt=""
                  className="service-card__image"
                  width="210"
                  height="170"
                  loading="lazy"
                />
              </article>
            </li>
            <li className="services__item">
              <article className="service-card">
                <div className="service-card__body">
                  <h3 className="service-card__title">
                    <span className="puddle-bg">Email</span>
                    <span className="puddle-bg">Marketing</span>
                  </h3>
                  <LinkItem />
                </div>
                <img
                  src="../src/css/images/services/4.svg"
                  alt=""
                  className="service-card__image"
                  width="210"
                  height="170"
                  loading="lazy"
                />
              </article>
            </li>
            <li className="services__item">
              <article className="service-card service-card--accent-bg">
                <div className="service-card__body">
                  <h3 className="service-card__title">
                    <span className="puddle-bg puddle-bg--light">Content</span>
                    <span className="puddle-bg puddle-bg--light">Creation</span>
                  </h3>
                  <LinkItem />
                </div>
                <img
                  src="../src/css/images/services/5.svg"
                  alt=""
                  className="service-card__image"
                  width="210"
                  height="170"
                  loading="lazy"
                />
              </article>
            </li>
            <li className="services__item">
              <article className="service-card service-card--dark-bg">
                <div className="service-card__body">
                  <h3 className="service-card__title">
                    <span className="puddle-bg">Analytics and </span>
                    <span className="puddle-bg">Tracking</span>
                  </h3>
                  <LinkItem className="service-card__link--light" />
                </div>
                <img
                  src="../src/css/images/services/6.svg"
                  alt=""
                  className="service-card__image"
                  width="210"
                  height="170"
                  loading="lazy"
                />
              </article>
            </li>
          </ul>
          <ServiceBanner />
        </div>
      </div>
    </section>
  );
}
