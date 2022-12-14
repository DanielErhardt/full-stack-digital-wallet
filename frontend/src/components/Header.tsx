import React, { useContext } from 'react';
import NGCashContext from '../context/NGCashContext';
import Button from './Button';

const Header = () => {
  const { username, logout } = useContext(NGCashContext);

  return (
    <header>
      <h3>
        {`Hello, ${username}`}
      </h3>
      <Button
        onClick={logout}
      >
        Logout
      </Button>
    </header>
  );
};

export default Header;
