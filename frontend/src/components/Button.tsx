import React, { FC } from 'react';

type ButtonType = {
  innerText: string;
  onClick: Function;
};

const Button: FC<ButtonType> = ({ innerText, onClick }) => (
  <button
    className="default-btn"
    type="button"
    onClick={() => onClick()}
  >
    {innerText}
  </button>
);

export default Button;
