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
      <Button
        innerText={isLogin ? 'LOGIN' : 'REGISTER'}
        onClick={onSubmit}
      />
    </form>
  );
};

export default UserAccountForm;
