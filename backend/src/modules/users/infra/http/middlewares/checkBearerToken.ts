import authConfig  from "@config/auth";
import { verify } from "jsonwebtoken";
import { Request } from "express";
import {container} from 'tsyringe'
import UserRepository from "../../typeorm/repositories/UserRepository";


interface TokenPayload {
    iat: number;
  exp: number;
    sub: string;
    id: string;
    email: string;
}
export default async function checkBearerToken(req: Request) {
  try {
    let token = null;
    if (req.headers.authorization) {
      token = req.headers.authorization;
      const tokenArray = token.split(" ");
      token = tokenArray[1];
    }
    if (req.query.token) {
      token = req.query.token;
    }
    if (req.body.token) {
      token = req.body.token;
    }
    if (!token) {
      return {
        status: "failed",
        message: "Authorization failed, no token found",
      };
    }

    const decryptedToken = verify(token, authConfig.JWT.secret);
    const {id} = decryptedToken as TokenPayload;
    const user = await container.resolve(UserRepository).findById(id);

    if (user) {
      return {
        status: "success",
        data: user,
      };
    }
    return {
      status: "failed",
      message: "No user data found for this token",
    };
  } catch (error:any) {
    if (error.name === "TokenExpiredError") {
      return {
        status: "failed",
        message: "Token expired",
      };
    }
    return {
      status: "failed",
      message: "Failed to authenticate token",
    };
  }
}
