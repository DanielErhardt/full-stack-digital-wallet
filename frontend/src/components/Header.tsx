import React, { useContext } from 'react';
import NGCashContext from '../context/NGCashContext';

const Header = () => {
  const { username, logout } = useContext(NGCashContext);

  return (
    <header>
      <span>
        {`Hello, ${username}`}
      </span>
      <span>
        <button
          type="button"
          onClick={() => logout()}
        >
          LOGOUT
        </button>
      </span>
    </header>
  );
};

export default Header;
