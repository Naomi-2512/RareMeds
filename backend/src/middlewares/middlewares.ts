import { NextFunction, Request, Response } from "express";
import { TokenDetails } from "../interfaces/interfaces";
import { ServiceResponse } from "../interfaces/services.results/formatted.response";
import jwt from "jsonwebtoken";


export interface ExtendedRequest extends Request {
  data?: TokenDetails;
}

export const verifyToken = (req: ExtendedRequest, res: Response, next: NextFunction) => {
  try {
    
    let token = req.headers["authorization"];

    if (!token || token === '') {
      return ServiceResponse.failure("Auth Error", "you are not unauthorised to access this service.");
    }

    let authToken = token.split(' ')[1];

    jwt.verify(authToken, process.env.SecretKey as string, (err, data) => {
      if (err) {
        if (err.name === 'JaonWebTokenError') {
          res.status(400).json(ServiceResponse.failure("Auth Error", "invalid authentication, kindly login."));
        } else if (err.name === 'TokenExpiredError') {
          res.status(400).json(ServiceResponse.failure("Auth Error", "authentication expired, kindly login."));
        } else {
          res.status(400).json(ServiceResponse.failure("Auth Error", "authentication error, kindly login."));
        }
      }

      req.data = data as TokenDetails;
      next();
    })
  } catch (error) {
    res.status(500).json(ServiceResponse.failure("Server Error", error instanceof Error ? error.message : "An error occured during authentication."))
  }
}

export const getIdFromToken = (req: ExtendedRequest) => {

  let data = req.data as TokenDetails;

  if (!data) return '';

  let UserId: string = data.UserId;

  return UserId ? UserId : '';
}

export const verifyAdmin = (req: ExtendedRequest, res: Response, next: NextFunction) => {

  let data: TokenDetails = req.data as TokenDetails;

  if (!data) {
    res.status(400).json(ServiceResponse.failure("Auth Error", "access not authourized."));
  } else {
    data.Role != 'Admin' ? res.status(400).json(ServiceResponse.failure("Auth Error", "access not authorized.")) : next();
  }
}