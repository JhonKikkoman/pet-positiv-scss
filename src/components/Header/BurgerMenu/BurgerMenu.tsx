import React, { useState } from 'react';

import Modal from '../Modal';

export default function BurgerMenu(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handlerClick = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      <button
        className="header__burger-button burger-button visible-mobile"
        onClick={handlerClick}
      >
        <span className="visually-hidden">Open navigation menu</span>
      </button>
      <Modal open={isOpen} setOpen={setIsOpen} />
    </>
  );
}
