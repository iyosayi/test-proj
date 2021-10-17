import {Request, Response, NextFunction} from 'express'
import checkBearerToken from "./checkBearerToken";
import { handleError } from '@utils/utils';
import { StatusCodes } from 'http-status-codes'
import { UserType } from '../../typeorm/entities/User';


export const isAnyone = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = await checkBearerToken(req);
      if (token.status === "failed" || !token.data) 
        return handleError(
          res,
          StatusCodes.UNAUTHORIZED,
          token.message,
        );
      if (
        token.data.type === UserType.DONOR ||
        token.data.type === UserType.STUDENT 
      ) {
        req.user = token.data;
        next();
      } else {
        return handleError(
          res,
          StatusCodes.UNAUTHORIZED,
          "Access not granted to this user resource.",
        );
      }
    } catch (err) {
      return handleError(
        res,
        StatusCodes.BAD_REQUEST,
        "Failed to authenticate token.",
      );
    }
};
  
export const isDonor = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = await checkBearerToken(req);
      if (token.status === "failed" || !token.data)
        return handleError(
          res,
          StatusCodes.UNAUTHORIZED,
          token.message,
        );
      if (token.data.type === UserType.DONOR) {
        req.user = token.data;
        next();
      } else {
        return handleError(
          res,
          StatusCodes.UNAUTHORIZED,
          "Access not granted to this user resource.",
        );
      }
    } catch (err) {
      return handleError(
        res,
        StatusCodes.BAD_REQUEST,
        "Failed to authenticate token.",
      );
    }
};
  
export const isStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = await checkBearerToken(req);
      if (token.status === "failed" || !token.data)
        return handleError(
          res,
          StatusCodes.UNAUTHORIZED,
          token.message,
        );
      if (token.data.type === UserType.STUDENT) {
        req.user = token.data;
        next();
      } else {
        return handleError(
          res,
          StatusCodes.UNAUTHORIZED,
          "Access not granted to this user resource.",
        );
      }
    } catch (err) {
      return handleError(
        res,
        StatusCodes.BAD_REQUEST,
        "Failed to authenticate token.",
      );
    }
  };

