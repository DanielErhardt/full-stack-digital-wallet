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
          innerText="Transfer"
          onClick={() => navigate('/transfer')}
        />

        <Button
          innerText="Transactions"
          onClick={() => navigate('/transactions')}
        />

        {role === 'guardian' && (
        <Button
          innerText="Dependents"
          onClick={() => navigate('/dependents')}
        />
        )}
      </div>
    </main>
  );
};

export default HomePage;
