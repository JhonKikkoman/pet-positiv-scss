import React from 'react';

interface propI {
  text: string;
}

export default function ContactUsRadio({ text }: propI): React.JSX.Element {
  return (
    <label className="radios__item radio">
      <input
        type="radio"
        className="radio__input visually-hidden"
        name="request-type"
        value={text}
        checked
      />
      <span className="radio__emulator"></span>
      <span className="radio__label">{text}</span>
    </label>
  );
}
