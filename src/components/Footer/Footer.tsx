import React from 'react';

import FooterContacts from './FooterContacts';
import FooterForm from './FooterForm';
import FooterNav from './FooterNav';

export default function Footer(): React.JSX.Element {
  return (
    <footer className="footer container">
      <div className="footer__inner">
        <FooterNav />
        <div className="footer__body">
          <FooterContacts />
          <FooterForm />
        </div>
        <div className="footer__extra">
          <p className="footer__copyright">
            © <time dateTime="2023">2023</time> Positivus. All Rights Reserved.
          </p>
          <a href="/" className="footer__privacy-policy-link">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
