import { NextFunction, Request, RequestHandler } from 'express';
import { ZodSchema } from 'zod';
import { cashTransferSchema } from '../@types/Inputs/TransactionInput';
import { userSchema } from '../@types/Entities/User';

import { userFormSchema } from '../@types/Inputs/UserFormInput';

const validateSchema = (req: Request, next: NextFunction, schema: ZodSchema) => {
  const { body } = req;
  const parsed = schema.safeParse(body);
  if (!parsed.success) throw parsed.error;
  req.body = parsed.data;
  next();
};

export const validateTransaction: RequestHandler = (req, _res, next) => {
  validateSchema(req, next, cashTransferSchema);
};

export const validateUserForm: RequestHandler = (req, _res, next) => {
  validateSchema(req, next, userFormSchema);
};

export const validateNewUser: RequestHandler = (req, _res, next) => {
  validateSchema(req, next, userSchema);
};
