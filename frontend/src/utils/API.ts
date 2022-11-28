import axios, { AxiosInstance } from 'axios';
import { FormResponseData } from '../@types/Responses/FormResponseData';
import { FormInput } from '../@types/FormInput';
import { UserData } from '../@types/API Data/UserData';
import { TransferInput } from '../@types/TransferInput';
import { TransferResponseData } from '../@types/Responses/TransferResponseData';

class API {
  private _instance: AxiosInstance;

  constructor() {
    this._instance = axios.create({
      baseURL: 'http://localhost:3001',
      timeout: 3000,
    });

    this._instance.interceptors.request.use((config) => {
      const token = localStorage.getItem('token');
      if (token) {
        // eslint-disable-next-line no-param-reassign
        config.headers = {
          Authorization: token,
        };
      }
      return config;
    });

    this._instance.interceptors.response.use(
      (response) => response.data,
      (error) => {
        const { response: { data, status } } = error;
        // eslint-disable-next-line no-console
        if (status === 500) console.log(error);
        return { error: data };
      },
    );
  }

  async login(credentials: FormInput): Promise<FormResponseData> {
    return this._instance.post('/users/login', { ...credentials });
  }

  async register(credentials: FormInput): Promise<FormResponseData> {
    return this._instance.post('/users', { ...credentials });
  }

  async getSelf(): Promise<UserData> {
    return this._instance.get('/users/self');
  }

  async getDependents(): Promise<Record<string, string>> {
    return this._instance.get('/users/dependents');
  }

  async getUserData(id: string): Promise<UserData> {
    return this._instance.get(`/users/${id}`);
  }

  async transfer(input: TransferInput): Promise<TransferResponseData> {
    const transfer = await this._instance.post('/transactions', input) as TransferResponseData;
    return transfer;
  }
}

export default new API();
