import React from 'react';

interface IProp {
  title: string;
  text: string;
  isOpen?: boolean;
}

export default function ProcessItem({
  title,
  text,
  isOpen,
}: IProp): React.JSX.Element {
  return (
    <li className="process__item">
      <details className="process__accordion" open={isOpen}>
        <summary className="process__accordion-header">
          <h3 className="process__accordion-title">{title}</h3>
          <span className="process__accordion-indicator"></span>
        </summary>
        <div className="process__accordion-body">
          <p>{text}</p>
        </div>
      </details>
    </li>
  );
}
