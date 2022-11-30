import React, { ChangeEventHandler, FC, useEffect } from 'react';
import { FormInput } from '../@types/FormInput';
import useKeyPress from '../hooks/useKeyPress';
import Button from './Button';

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

      <Button
        onClick={onSubmit}
      >
        {isLogin ? 'LOGIN' : 'REGISTER'}
      </Button>

      <p className="form-message">{message}</p>
    </form>
  );
};

export default UserAccountForm;
