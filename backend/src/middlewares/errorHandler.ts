import { ErrorRequestHandler } from 'express';
import codes from 'http-status-codes';
import RequestError from '../utils/RequestError';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  if (error instanceof RequestError) {
    const { statusCode, message } = error;
    return res.status(statusCode).json({ requestError: message });
  }

  return res.status(codes.INTERNAL_SERVER_ERROR).json(error);
};

export default errorHandler;
