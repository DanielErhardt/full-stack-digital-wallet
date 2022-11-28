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
      innerText="Update"
      onClick={updateBalance}
    />
  </form>
);

export default AccountBalance;
