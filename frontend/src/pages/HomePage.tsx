import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountBalance from '../components/AccountBalance';
import Button from '../components/Button';
import Header from '../components/Header';
import NGCashContext from '../context/NGCashContext';
import API from '../utils/API';

const HomePage = () => {
  const [balance, setBalance] = useState<number>(0);
  const { role } = useContext(NGCashContext);
  const navigate = useNavigate();

  const updateBalance = async () => {
    const user = await API.getSelf();
    const { account: { balance: accountBalance } } = user;

    setBalance(accountBalance);
  };

  useEffect(() => {
    updateBalance();
  }, []);

  return (
    <main className="home-page">
      <Header />
      <AccountBalance balance={balance} updateBalance={updateBalance} />
      <div className="home-buttons">
        <Button
          onClick={() => navigate('/transfer')}
        >
          Transfer
        </Button>

        <Button
          onClick={() => navigate('/transactions')}
        >
          Transactions
        </Button>

        {role === 'guardian' && (
        <Button
          onClick={() => navigate('/dependents')}
        >
          Dependents
        </Button>
        )}
      </div>
    </main>
  );
};

export default HomePage;
