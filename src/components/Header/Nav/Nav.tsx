import React from 'react';

type linkNameT = 'About us' | 'Services' | 'Use Cases' | 'Pricing' | 'Blog';

export const itemsArr: linkNameT[] = [
  'About us',
  'Services',
  'Use Cases',
  'Pricing',
  'Blog',
];

export default function Nav(): React.JSX.Element {
  return (
    <nav className="header__menu hidden-mobile">
      <ul className="header__menu-list">
        {itemsArr.map((item, index) => (
          <li key={`${item}_${index}`} className="header__menu-item">
            <a href="/" className="header__menu-link">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
