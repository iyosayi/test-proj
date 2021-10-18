import {Request, Response, NextFunction} from 'express'
import { handleValidationError } from "@utils/utils";
import Joi from "joi";

export const createUserSchema = async (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    name: Joi.string().trim().required().label("Name"),
    type: Joi.string().trim().valid('donor', 'student').required().label("User type"),
    email: Joi.string().email().lowercase().trim().required().label("email"),
    password: Joi.string().min(6).max(20).trim().required().label("Password"),
  });
  await handleValidationError(res, next, schema.validate(req.body));
};

export const loginSchema = async (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    email: Joi.string().email().trim().required().label("Email"),
    password: Joi.string().trim().required().label("Password"),
  });
  await handleValidationError(res, next, schema.validate(req.body));
};
