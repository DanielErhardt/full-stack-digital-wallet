import React, { ChangeEventHandler, FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FormInput } from '../@types/FormInput';
import useKeyPress from '../hooks/useKeyPress';

type FormProps = {
  onSubmit: () => void;
  message: string;
  isLogin: boolean;
  form: FormInput;
  handleChange: ChangeEventHandler<HTMLInputElement>;
};

const UserAccountForm: FC<FormProps> = (props) => {
  const {
    onSubmit, message, isLogin, form, handleChange,
  } = props;
  const enterPressed = useKeyPress('Enter');

  useEffect(() => {
    if (enterPressed) onSubmit();
  }, [isLogin, enterPressed]);

  return (
    <form>
      <div>
        <label htmlFor="username">
          Username
          <br />
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            value={form.username}
            placeholder="Your username here."
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password
          <br />
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={form.password}
            placeholder="Your password here."
          />
        </label>
      </div>
      {message && (
        <span>{message}</span>
      )}
      <div>
        <button
          type="button"
          onClick={() => onSubmit()}
        >
          { isLogin ? 'LOGIN' : 'REGISTER' }
        </button>
        <br />
        { isLogin && <Link to="/register">{'Don\'t have an account? Register now!'}</Link> }
      </div>
    </form>
  );
};

export default UserAccountForm;
