import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Transaction } from '../@types/Transaction';
import Header from '../components/Header';
import List from '../components/List';
import TransactionCard from '../components/TransactionCard';
import { processTransactions } from '../helpers/processTransactions';
import API from '../utils/API';

const TransactionsPage = () => {
  const [dependentUsername, setDependentUsername] = useState<string>('');
  const [dependentBalance, setDependentBalance] = useState<number>(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const { id } = useParams();

  const fetchData = async () => {
    if (id) {
      const dependent = await API.getUserData(id);
      const transactionsData = processTransactions(dependent);
      const { username, account: { balance } } = dependent;
      setDependentBalance(balance);
      setDependentUsername(username);
      setTransactions(transactionsData);
    } else {
      const user = await API.getSelf();
      const transactionsData = processTransactions(user);
      setTransactions(transactionsData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="list-page">
      <Header />
      <h2>Transactions</h2>
      {id && (
        <div className="trn-dependents">
          <p>{`Dependent: ${dependentUsername}`}</p>
          <p>{`${dependentUsername}'s Balance: R$${dependentBalance}`}</p>
        </div>
      )}
      <List>
        {transactions.map((trn, i) => (
          <TransactionCard
            key={`trn${i}`}
            otherUser={trn.otherUser}
            date={trn.date}
            value={trn.value}
            type={trn.type}
          />
        ))}
      </List>
    </main>
  );
};

export default TransactionsPage;
