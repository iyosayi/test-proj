import User from '@modules/users/infra/typeorm/entities/User';
import { Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes'
import {ValidationResult} from 'joi'

/**
 * 
 * @param res express Response object
 * @param code Status code
 * @param data Data to be returned
 * @param message Message sent back to client
 * @returns 
 */
export const handleSuccess = (res: Response, code: number, data: any, message: string) => {
    return res.status(code).json({
        status: "success",
        message,
        data,
      });
}

export const handleError = (res: Response, code: number, message: string | undefined) => {
      return res.status(code).json({
        status: "failed",
        message,
      })
}

export const handleValidationError = async (res: Response, next: NextFunction, validation: ValidationResult) => {
    try {
      const validate = await validation;
      if (validate.error) throw validate.error;
      next();
    } catch (error: any) {
    console.log("🚀 ~ file: utils.ts ~ line 34 ~ handleValidationError ~ error", error.details[0].message);
      
      return handleError(
        res,
        StatusCodes.PRECONDITION_FAILED,
        error.details[0].message,
      );
    }
  };
  
  export const methodNotAllowedHandler = (res: Response) =>
    handleError(res, StatusCodes.METHOD_NOT_ALLOWED, "Method not allowed");
  


export const removeSensitiveData = ({ password, ...body }: {password: string}& User) => body;
