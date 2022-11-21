import { RequestHandler } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import RequestError from '../utils/RequestError';
import Token from '../utils/Token';

const authentication: RequestHandler = (req, _res, next) => {
  const { headers: { authorization } } = req;

  if (!authorization) throw RequestError.unauthorized('Token not found.');
  const { id } = Token.validate('authorization') as JwtPayload;
  req.headers.userId = id;
  return next();
};

export default authentication;
