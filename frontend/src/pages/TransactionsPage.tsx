import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Transaction } from '../@types/Transaction';
import Header from '../components/Header';
import TransactionCard from '../components/TransactionCard';
import { processTransactions } from '../helpers/processTransactions';
import API from '../utils/API';

const TransactionsPage = () => {
  const [dependentUsername, setDependentUsername] = useState<string>('');
  const [dependentBalance, setDependentBalance] = useState<number>(0);
  const [cashIn, setCashIn] = useState<Transaction[]>([]);
  const [cashOut, setCashOut] = useState<Transaction[]>([]);
  const { id } = useParams();

  const fetchData = async () => {
    const user = await API.getSelf();
    const transactions = processTransactions(user);

    if (id) {
      const dependent = await API.getUserData(id);
      const { username, account: { balance } } = dependent;
      setDependentBalance(balance);
      setDependentUsername(username);
    }

    setCashIn(transactions.filter((trn) => trn.type === 'cash in'));
    setCashOut(transactions.filter((trn) => trn.type === 'cash out'));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <Header />
      <div>
        {id && (
        <div>
          <span>{`Dependent: ${dependentUsername}`}</span>
          <span>{`Balance: ${dependentBalance}`}</span>
        </div>
        )}
      </div>
      <div>
        <p>Cash In:</p>
        {cashIn.length === 0
          ? 'You have no Cash In transactions.'
          : cashIn.map((trn, i) => (
            <TransactionCard
              key={`trn${i}`}
              otherUser={trn.otherUser}
              date={trn.date}
              value={trn.value}
              type={trn.type}
            />
          ))}
      </div>
      <div>
        <p>Cash Out:</p>
        {cashOut.length === 0
          ? 'You have no Cash Out transactions.'
          : cashOut.map((trn, i) => (
            <TransactionCard
              key={`trn${i}`}
              otherUser={trn.otherUser}
              date={trn.date}
              value={trn.value}
              type={trn.type}
            />
          ))}
      </div>
    </main>
  );
};

export default TransactionsPage;
