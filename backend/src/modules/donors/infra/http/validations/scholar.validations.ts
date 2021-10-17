import {Request, Response, NextFunction} from 'express'
import { handleValidationError } from "@utils/utils";
import Joi from "joi";

export const createScholarshipSchema = async (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    name: Joi.string().trim().required().label('Name'),
    amount: Joi.string().trim().required().label("Amount"),
    description: Joi.string().trim().required().label("Description"),
    donor: Joi.string().trim().required().label("Donor Id"),
  });
  await handleValidationError(res, next, schema.validate(req.body));
};

export const createAwardSchema = async (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    winnerId: Joi.string().trim().required().label("Student Id"),
    scholarshipId: Joi.string().trim().required().label("Scholarship Id"),
  });
  await handleValidationError(res, next, schema.validate(req.body));
};

export const contributeSchema = async (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    donorId: Joi.string().trim().required().label("Donor Id"),
    scholarshipId: Joi.string().trim().required().label("Scholarship Id"),
    amount: Joi.string().trim().required().label("Amount"),
  });
  await handleValidationError(res, next, schema.validate(req.body));
};

export const setActiveSchema = async (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    isActive: Joi.boolean().required().label("Active"),
    scholarshipId: Joi.string().trim().required().label("Scholarship Id"),
  });
  await handleValidationError(res, next, schema.validate(req.body));
}
