import React, { FC } from 'react';
import Button from './Button';

type AccountBalanceType = {
  balance: number;
  updateBalance: Function;
};

const AccountBalance: FC<AccountBalanceType> = ({ balance, updateBalance }) => (
  <form className="account-form">
    {`R$ ${balance}`}

    <Button
      onClick={updateBalance}
    >
      Update
    </Button>
  </form>
);

export default AccountBalance;
