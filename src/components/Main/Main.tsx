import React from 'react';

import ContactUs from './ContactUs';
import Hero from './Hero';
import Process from './Process';
import Reviews from './Reviews';
import Services from './Services';
import Studies from './Studies';
import Team from './Team';

export default function Main(): React.JSX.Element {
  return (
    <main className="content">
      <Hero />
      <Services />
      <Studies />
      <Process />
      <Team />
      <Reviews />
      <ContactUs />
    </main>
  );
}
