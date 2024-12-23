import React from 'react';

export default function FooterContacts(): React.JSX.Element {
  return (
    <div className="footer__contacts">
      <h2 className="footer__contacts-title h4 puddle-bg">Contact us:</h2>
      <address className="footer__contacts-body">
        <p>
          Email: <a href="info@positivus.com">info@positivus.com</a>
        </p>
        <p>
          Phone: <a href="tel:5555678901">555-567-8901</a>
        </p>
        <p>
          Address: 1234 Main St <br />
          Moonstone City, Stardust State 12345
        </p>
      </address>
    </div>
  );
}
