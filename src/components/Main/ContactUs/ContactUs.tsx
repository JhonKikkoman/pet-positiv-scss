import React from 'react';

import ContactUsHeader from './ContactUsHeader';
import ContactUsRadio from './ContactUsRadio';

export default function ContactUs(): React.JSX.Element {
  return (
    <section className="section container">
      <ContactUsHeader />
      <div className="section__body">
        <div className="contact-us">
          <form className="contact-us__form">
            <fieldset className="contact-us__request-types radios">
              <legend className="radios__title visually-hidden">
                Request type
              </legend>
              <ContactUsRadio text="Say Hi" />
              <ContactUsRadio text="Get a Quote" />
            </fieldset>
            <div className="contact-us__body">
              <div className="contact-us__field field">
                <label htmlFor="name" className="field__label">
                  Name
                </label>
                <input
                  className="field__input"
                  name="name"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div className="contact-us__field field">
                <label htmlFor="email" className="field__label">
                  Email*
                </label>
                <input
                  className="field__input"
                  name="email"
                  id="email"
                  placeholder="Email"
                  type="email"
                  required
                />
              </div>
              <div className="contact-us__field field">
                <label htmlFor="message" className="field__label">
                  Message*
                </label>
                <textarea
                  className="field__input field__input--textarea"
                  name="message"
                  id="message"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
            </div>
            <button className="contact-us__button button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
