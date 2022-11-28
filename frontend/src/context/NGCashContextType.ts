import { FormInput } from '../@types/FormInput';

export type NGCashContextType = {
  username: string;
  role: string;
  dependents?: Record<string, string>;
  login: (formInput: FormInput) => Promise<string | null>;
  register: (formInput: FormInput) => Promise<string | null>;
  logout: () => void;
};
