import React from 'react';

export default function FooterForm(): React.JSX.Element {
  return (
    <form className="footer__subscribe-form subscribe-form">
      <h2 className="visually-hidden">Subscription</h2>
      <div className="subscribe-form__field field field--big-height field--dark-bg">
        <label
          htmlFor="subscribe-email"
          className="field__label visually-hidden"
        >
          Email
        </label>

        <input
          className="field__input"
          name="email"
          id="subscribe-email"
          placeholder="Email"
          type="email"
          required
        />
      </div>
      <button
        className="subscribe-form__button button button--accent"
        type="submit"
      >
        Subscribe to news
      </button>
    </form>
  );
}
