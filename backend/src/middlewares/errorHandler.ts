import { ErrorRequestHandler } from 'express';
import codes from 'http-status-codes';
import { ZodError } from 'zod';
import RequestError from '../utils/RequestError';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  if (error instanceof RequestError) {
    const { statusCode, message } = error;
    return res.status(statusCode).json({ message });
  }

  if (error instanceof ZodError) {
    const { issues } = error;
    return res.status(codes.BAD_REQUEST).json({
      message: 'Request has invalid properties. See error.issues for details.',
      issues,
    });
  }

  const { message, name, stack } = error as Error;

  return res.status(codes.INTERNAL_SERVER_ERROR).json({
    message, name, stack, completeError: error,
  });
};

export default errorHandler;
