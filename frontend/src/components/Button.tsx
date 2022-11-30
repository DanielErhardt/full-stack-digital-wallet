import React, { FC } from 'react';

type ButtonType = {
  children: React.ReactNode;
  onClick: Function;
};

const Button: FC<ButtonType> = ({ children, onClick }) => (
  <button
    className="default-btn"
    type="button"
    onClick={() => onClick()}
  >
    {children}
  </button>
);

export default Button;
