import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <main>
      <Header />
      <div>
        {`R$ ${balance}`}
        <button
          type="button"
          onClick={() => updateBalance()}
        >
          Update
        </button>
      </div>
      <div>

        <button
          type="button"
          onClick={() => navigate('/transfer')}
        >
          Transfer
        </button>
        <button
          type="button"
          onClick={() => navigate('/transactions')}
        >
          Transactions
        </button>
        {role === 'guardian' && (
        <button
          type="button"
          onClick={() => navigate('/dependents')}
        >
          Dependents
        </button>
        )}
      </div>
    </main>
  );
};

export default HomePage;
