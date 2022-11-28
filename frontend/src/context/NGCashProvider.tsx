import React, {
  FC, useEffect, useMemo, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { FormResponseData } from '../@types/Responses/FormResponseData';
import { FormInput } from '../@types/FormInput';
import { NGCashContextType } from './NGCashContextType';
import API from '../utils/API';
import NGCashContext from './NGCashContext';

type Props = {
  children: React.ReactNode,
};

const NGCashProvider: FC<Props> = ({ children }) => {
  const [username, setUsername] = useState<string>('User');
  const [role, setRole] = useState<string>('user');
  const [dependents, setDependents] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDependents = async () => {
      const dependentsData = await API.getDependents();
      setDependents(dependentsData);
    };

    if (role === 'guardian') {
      fetchDependents();
    }
  }, [role]);

  const saveUserData = async (data: FormResponseData): Promise<string | null> => {
    const { error } = data;
    if (error) return error.message;
    const { token } = data;

    localStorage.setItem('token', token);

    const userInfo = await API.getSelf();
    const { role: dataRole, username: dataUsername } = userInfo;

    setUsername(dataUsername);
    setRole(dataRole);

    return null;
  };

  const login = async (formInput: FormInput): Promise<string | null> => {
    const data = await API.login(formInput);
    return saveUserData(data);
  };

  const register = async (formInput: FormInput): Promise<string | null> => {
    const data = await API.register(formInput);
    return saveUserData(data);
  };

  const logout = () => {
    localStorage.clear();
    navigate('/login');
    setUsername('User');
    setRole('user');
    setDependents({});
  };

  const contextType = useMemo((): NGCashContextType => ({
    username,
    role,
    dependents,
    login,
    register,
    logout,
  }), [username, role, dependents]);

  return (
    <NGCashContext.Provider value={contextType}>
      {children}
    </NGCashContext.Provider>
  );
};

export default NGCashProvider;
