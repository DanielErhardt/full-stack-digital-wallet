import React, { FC } from 'react';
import { ArrowClockwise } from 'phosphor-react';
import Button from './Button';

type AccountBalanceType = {
  balance: number;
  updateBalance: Function;
};

const AccountBalance: FC<AccountBalanceType> = ({ balance, updateBalance }) => (
  <form className="account-form account-balance">
    {`R$ ${balance}`}

    <Button
      onClick={updateBalance}
    >
      <ArrowClockwise size={32} weight="bold" />
    </Button>
  </form>
);

export default AccountBalance;
