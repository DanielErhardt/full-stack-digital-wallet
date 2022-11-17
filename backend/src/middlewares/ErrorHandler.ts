import { ErrorRequestHandler } from 'express';

class ErrorHandler {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static handle: ErrorRequestHandler = (error, _req, res, _next) => {
    res.status(500).json(error);
  };
}

export default ErrorHandler;
