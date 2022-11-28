import React from 'react';
import { Transaction } from '../@types/Transaction';

const TransactionCard = ({
  otherUser, date, value,
}: Transaction) => (
  <div style={{ backgroundColor: '#eeeeee' }}>
    <p>{otherUser}</p>
    <p>{value}</p>
    <p>{date}</p>
  </div>
);

export default TransactionCard;
