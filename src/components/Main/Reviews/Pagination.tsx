import React from 'react';

export default function Pagination(): React.JSX.Element {
  return (
    <div className="reviews__actions">
      <button className="reviews__arrow-button" type="button" disabled>
        <span className="visually-hidden">Previous slide</span>
        <svg
          width="23.005859"
          height="19.982422"
          viewBox="0 0 23.0059 19.9824"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs />
          <path
            d="M5.12 11.49L11.05 17.41C11.64 18 11.64 18.94 11.05 19.53C10.45 20.13 9.52 20.13 8.92 19.53L0.44 11.05C-0.15 10.45 -0.15 9.52 0.44 8.93L8.92 0.44C9.52 -0.15 10.45 -0.15 11.05 0.44C11.64 1.03 11.64 1.97 11.05 2.56L5.12 8.49L21.5 8.49C22.34 8.49 23 9.15 23 9.99C23 10.83 22.34 11.49 21.5 11.49L5.12 11.49Z"
            fill="#FFFFFF"
            fillOpacity="0.300000"
            fillRule="evenodd"
          />
        </svg>
      </button>

      <div className="reviews__pagination pagination">
        <ul className="pagination__list">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <li key={index} className="pagination__item">
                <button
                  className={`pagination__button ${index === 0 ? 'is-current' : ''}`}
                  type="button"
                >
                  <span className="visually-hidden">slide</span>
                  <svg
                    width="14.000000"
                    height="14.000000"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs />
                    <path
                      id="Vector"
                      d="M7 2.05L14 0L11.96 7L14 14L7 11.96L0 14L2.05 7L0 0L7 2.05Z"
                      fill="#FFFFFF"
                      fillOpacity="1.000000"
                      fillRule="nonzero"
                    />
                  </svg>
                </button>
              </li>
            ))}
        </ul>
      </div>

      <button className="reviews__arrow-button" type="button">
        <span className="visually-hidden">slide</span>
        <svg
          width="23.005859"
          height="19.982422"
          viewBox="0 0 23.0059 19.9824"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs />
          <path
            id="Arrow 3"
            d="M17.87 8.49L11.95 2.56C11.35 1.97 11.35 1.03 11.95 0.44C12.54 -0.15 13.48 -0.15 14.07 0.44L22.56 8.93C23.15 9.52 23.15 10.45 22.56 11.05L14.07 19.53C13.48 20.13 12.54 20.13 11.95 19.53C11.35 18.94 11.35 18 11.95 17.41L17.87 11.49L1.5 11.49C0.66 11.49 0 10.83 0 9.99C0 9.15 0.66 8.49 1.5 8.49L17.87 8.49Z"
            fill="#FFFFFF"
            fillOpacity="1.000000"
            fillRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
