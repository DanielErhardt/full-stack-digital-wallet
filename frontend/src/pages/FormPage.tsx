import React, {
  ChangeEventHandler, FC, useContext, useEffect, useState,
} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Wallet } from 'phosphor-react';
import { FormInput } from '../@types/FormInput';
import UserAccountForm from '../components/UserAccountForm';
import NGCashContext from '../context/NGCashContext';

const FormPage: FC = () => {
  const [form, setForm] = useState<FormInput>({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const { login, register } = useContext(NGCashContext);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname.includes('login');

  useEffect(() => {
    setForm({ username: '', password: '' });
  }, [isLogin]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target: { name, value } }) => {
    setForm((state) => ({ ...state, [name]: value }));
  };

  const sendForm = async (callback: Function, destination: string) => {
    const resultMessage = await callback(form);

    if (resultMessage) setMessage(resultMessage);
    else navigate(destination);
  };

  const onSubmit = () => {
    if (form.username.length < 6 || form.password.length < 6) {
      setMessage('Username and Password have to be at least 6 characters long.');
      return;
    }

    if (isLogin) sendForm(login, '/home');
    else sendForm(register, '/home');
  };

  return (
    <main className="form-page">
      <Wallet size={256} />
      <UserAccountForm
        onSubmit={onSubmit}
        isLogin={isLogin}
        handleChange={handleChange}
        form={form}
        message={message}
      />

      { isLogin && <Link to="/register">{'Don\'t have an account? Register now!'}</Link> }
    </main>
  );
};

FormPage.defaultProps = {
  isRegister: false,
};

export default FormPage;
