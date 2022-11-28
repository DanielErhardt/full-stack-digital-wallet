import React from 'react';
import { Transaction } from '../@types/Transaction';
import { formatDate } from '../helpers/formatDate';

const TransactionCard = ({
  otherUser, date, value, type,
}: Transaction) => (
  <div className="list-card">
    <p className="trn-type">{type === 'cash in' ? 'Cash In' : 'Cash Out'}</p>
    <p className="trn-username">{`${type === 'cash in' ? 'From' : 'To'}: ${otherUser}`}</p>
    <p className="trn-value">{`R$ ${value}`}</p>
    <p className="trn-date">{formatDate(date)}</p>
  </div>
);

export default TransactionCard;
