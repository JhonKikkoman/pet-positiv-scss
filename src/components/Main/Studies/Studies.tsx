import React from 'react';

import StudiesHeader from './StudiesHeader';
import StudiesItem from './StudiesItem';

const studiesContentArr = [
  {
    content:
      'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
  },
  {
    content:
      'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
  },
  {
    content:
      'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
  },
];

export default function Studies(): React.JSX.Element {
  return (
    <section className="section section--hidden-x container">
      <StudiesHeader />
      <div className="section__body">
        <div className="studies">
          <ul className="studies__list">
            {studiesContentArr.map((text, index) => (
              <StudiesItem key={index} text={text.content} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
