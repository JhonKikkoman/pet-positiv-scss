import React from 'react';

import TeamHeader from './TeamHeader';

interface dataArrI {
  name: string;
  post: string;
  content: string;
  photo: number;
}

const dataArr: dataArrI[] = [
  {
    name: 'Jhon Smith',
    post: 'CEO and Founder',
    content:
      '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
    photo: 1,
  },
  {
    name: 'Jane Doe',
    post: 'Director of Operations',
    content:
      '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
    photo: 2,
  },
  {
    name: 'Michael Brown',
    post: 'Senior SEO Specialist',
    content:
      '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
    photo: 3,
  },
  {
    name: 'Emily Johnson',
    post: 'PPC Manager',
    content:
      '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
    photo: 4,
  },
  {
    name: 'Brian Williams',
    post: 'Social Media Specialist',
    content:
      '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
    photo: 5,
  },
  {
    name: 'Sarah Kim',
    post: 'Content Creator',
    content:
      '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for variousindustries',
    photo: 6,
  },
];

export default function Team(): React.JSX.Element {
  return (
    <section className="section container">
      <TeamHeader />
      <div className="section__body">
        <div className="team">
          <ul className="team__list grid grid-3">
            {dataArr.map((item, index) => (
              <li key={`${item.name}_${index}`} className="team__item">
                <article className="team-card">
                  <header className="team-card__header">
                    <img
                      src={`../src/css/images/team/${item.photo}.svg`}
                      alt="photo"
                      className="team-card__image"
                      width="100"
                      height="100"
                      loading="lazy"
                    />
                    <div className="team-card__info">
                      <h3 className="team-card__name h4">{item.name}</h3>
                      <p className="team-card__post">{item.post}</p>
                    </div>
                    <a href="/" className="team-card__link" target="_blank">
                      <span className="visually-hidden">linkedIn</span>
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
                  </header>
                  <div className="team-card__body">
                    <p>{item.content}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
          <button className="team__button button" type="button">
            See all team
          </button>
        </div>
      </div>
    </section>
  );
}
