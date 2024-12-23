import React from 'react';

import { itemsArr } from '../Nav/Nav';

interface IProp {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ open, setOpen }: IProp): React.JSX.Element {
  return (
    <>
      <dialog className="mobile-overlay visible-mobile" open={open}>
        <div className="mobile-overlay__close-button-wrapper">
          <button
            className="mobile-overlay__close-button cross-button"
            type="button"
            onClick={() => setOpen(prev => !prev)}
          >
            <span className="visually-hidden">Close navigation menu</span>
          </button>
        </div>
        <div className="mobile-overlay__body">
          <ul className="mobile-overlay__list">
            {itemsArr.map((item, index) => (
              <li key={`${item}_${index}`} className="mobile-overlay__item">
                <a href="/" className="mobile-overlay__link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </dialog>
    </>
  );
}
