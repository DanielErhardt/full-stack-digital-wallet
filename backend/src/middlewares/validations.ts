import { NextFunction, Request, RequestHandler } from 'express';
import { ZodSchema } from 'zod';
import { cashTransferSchema } from '../@types/CashTransferDTO';
import { userSchema } from '../@types/Entities/User';

import { userFormSchema } from '../@types/UserFormDTO';

const validateSchema = (req: Request, next: NextFunction, schema: ZodSchema) => {
  const { body } = req;
  const parsed = schema.safeParse(body);
  if (!parsed.success) throw parsed.error;
  req.body = parsed.data;
  next();
};

export const validateCashTransfer: RequestHandler = (req, _res, next) => {
  validateSchema(req, next, cashTransferSchema);
};

export const validateLogin: RequestHandler = (req, _res, next) => {
  validateSchema(req, next, userFormSchema);
};

export const validateNewUser: RequestHandler = (req, _res, next) => {
  validateSchema(req, next, userSchema);
};
