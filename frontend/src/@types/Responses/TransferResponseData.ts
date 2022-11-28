import { ResponseError } from './ResponseError';

export type TransferResponseData = {
  message: string;
  error?: ResponseError;
};
