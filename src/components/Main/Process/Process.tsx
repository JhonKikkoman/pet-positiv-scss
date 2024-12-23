import React from 'react';

import ProcessHeader from './ProcessHeader';
import ProcessItem from './ProcessItem';

type itemT = { title: string; text: string };

const processItemArr: itemT[] = [
  {
    title: 'Consultation',
    text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
  },
  {
    title: 'Research and Strategy Development',
    text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your cneeds and tailor our services to best fit your requirements.',
  },
  {
    title: 'Implementation',
    text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current  marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
  },
  {
    title: 'Monitoring and Optimization',
    text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
  },
  {
    title: 'Reporting and Communication',
    text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
  },
  {
    title: 'Continual Improvement',
    text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
  },
];

export default function Process(): React.JSX.Element {
  return (
    <section className="section container">
      <ProcessHeader />
      <div className="section__body">
        <div className="process">
          <ol className="process__list">
            {processItemArr.map((item, index) => (
              <ProcessItem
                key={item.title}
                title={item.title}
                text={item.text}
                isOpen={index === 0 ? true : false}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
