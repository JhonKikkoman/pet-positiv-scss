import React from 'react';

import Pagination from './Pagination';
import ReviewsHeader from './ReviewsHeader';

export default function Reviews(): React.JSX.Element {
  return (
    <section className="section container">
      <ReviewsHeader />
      <div className="section__body">
        <div className="reviews">
          <div className="reviews__slider">
            <ul className="reviews__slider-list">
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <li key={index} className="reviews__slider-item">
                    <blockquote className="review-card">
                      <div className="review-card__body">
                        <p>
                          We have been working with Positivus for the past year
                          and have seen a significant increase in website
                          traffic and leads as a result of their efforts. The
                          team is professional, responsive, and truly cares
                          about the success of our business. We highly recommend
                          Positivus to any company looking to grow their online
                          presence.
                        </p>
                      </div>
                      <footer className="review-card__footer">
                        <cite className="review-card__name">John Smith</cite>
                        <cite className="review-card__company">
                          Marketing Director at XYZ Corp
                        </cite>
                      </footer>
                    </blockquote>
                  </li>
                ))}
            </ul>
          </div>
          <Pagination />
        </div>
      </div>
    </section>
  );
}
