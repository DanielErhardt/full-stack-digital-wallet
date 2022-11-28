import { ResponseError } from './ResponseError';

export type FormResponseData = {
  token: string;
  error?: ResponseError;
};
