import { NextFunction, Request, RequestHandler } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import RequestError from '../utils/RequestError';
import Token from '../utils/Token';

const auth = (req: Request, next: NextFunction, userRole = '') => {
  const { headers: { authorization } } = req;

  if (!authorization) throw RequestError.unauthorized('Token not found.');

  const { id, username, role } = Token.validate('authorization') as JwtPayload;

  if (!role) throw RequestError.badRequest('Token has no role assigned to it.');

  if (userRole && role !== userRole) throw RequestError.unauthorized(`This route requires ${userRole} role.`);

  req.headers.userId = id;
  req.headers.username = username;

  return next();
};

const any: RequestHandler = (req, _res, next) => {
  auth(req, next);
};

const parent: RequestHandler = (req, _res, next) => {
  auth(req, next, 'parent');
};

export default { any, parent };
