import React, { ChangeEventHandler, useContext, useState } from 'react';
import { TransferInput } from '../@types/TransferInput';
import NGCashContext from '../context/NGCashContext';
import API from '../utils/API';

const TransferPage = () => {
  const [form, setForm] = useState<Record<string, string>>({ username: '', value: '' });
  const [message, setMessage] = useState<string>('');
  const { username } = useContext(NGCashContext);

  const transfer = async () => {
    if (form.username.length < 6) {
      setMessage('Username has to be at least 6 characters long.');
      return;
    }

    if (Number(form.value) <= 0) {
      setMessage('Value is invalid.');
      return;
    }

    const transferInput: TransferInput = {
      debitedUsername: username,
      creditedUsername: form.username,
      value: Number(form.value),
    };

    const transferOutput = await API.transfer(transferInput);
    const { error } = transferOutput;
    if (error) setMessage(error.message);
    else {
      setMessage(transferOutput.message);
      setForm({ username: '', value: '0' });
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target: { name, value } }) => {
    setForm((state) => ({ ...state, [name]: value }));
  };

  return (
    <main>

        <Button
          innerText="Transfer"
          onClick={transfer}
        />

    </main>
  );
};

export default TransferPage;
